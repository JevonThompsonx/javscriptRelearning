#!/bin/bash

# --- Configuration ---
# The entry point of your Bun application (e.g., index.ts, main.js)
INPUT_FILE=""

# The base name for your output executables (e.g., myapp)
OUTPUT_NAME=""

# Directory to store the compiled binaries
OUTPUT_DIR="dist"
# --- End Configuration ---

# --- Script Logic ---

# Check if input file and output name are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./compile-all.sh <input_file> <output_name_prefix>"
  echo "Example: ./compile-all.sh src/index.ts myapp"
  exit 1
fi

INPUT_FILE="$1"
OUTPUT_NAME="$2"

# Supported targets
# You can add or remove targets from this list as needed
# For x64, '-modern' (Haswell) is often the default if not specified.
# '-baseline' (Nehalem) is for older CPU compatibility.
TARGETS=(
  "bun-linux-x64"
  "bun-linux-x64-baseline"
  "bun-linux-arm64"
  "bun-linux-x64-musl"
  "bun-linux-arm64-musl"
  "bun-darwin-x64"
  "bun-darwin-arm64"
  "bun-windows-x64"
  "bun-windows-x64-baseline"
)

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check if Bun is installed
if ! command -v bun &> /dev/null
then
    echo "Bun could not be found. Please install Bun first."
    echo "Visit https://bun.sh for installation instructions."
    exit 1
fi

echo "Bun version: $(bun --version)"
echo "Input file: $INPUT_FILE"
echo "Output name prefix: $OUTPUT_NAME"
echo "Output directory: $OUTPUT_DIR"
echo ""

# Loop through each target and compile
for TARGET in "${TARGETS[@]}"; do
  echo "------------------------------------"
  echo "Compiling for target: $TARGET"
  echo "------------------------------------"

  # Determine output file suffix and name
  OUT_SUFFIX=""
  # Bun automatically adds .exe for Windows targets
  if [[ "$TARGET" == *"windows"* ]]; then
    OUT_FILENAME="${OUTPUT_NAME}-${TARGET}" # Bun adds .exe
  else
    OUT_FILENAME="${OUTPUT_NAME}-${TARGET}"
  fi

  FULL_OUTPUT_PATH="$OUTPUT_DIR/$OUT_FILENAME"

  echo "Outputting to: $FULL_OUTPUT_PATH"

  # Run the bun build command
  if bun build "$INPUT_FILE" --compile --target "$TARGET" --outfile "$FULL_OUTPUT_PATH"; then
    echo "Successfully compiled for $TARGET"
    # Make Linux and macOS binaries executable
    if [[ "$TARGET" == *"linux"* ]] || [[ "$TARGET" == *"darwin"* ]]; then
      chmod +x "$FULL_OUTPUT_PATH"
      echo "Made $FULL_OUTPUT_PATH executable."
    fi
  else
    echo "ERROR: Failed to compile for $TARGET"
  fi
  echo ""
done

echo "------------------------------------"
echo "All compilation attempts finished."
echo "Check the '$OUTPUT_DIR' directory for the executables."
echo "------------------------------------"

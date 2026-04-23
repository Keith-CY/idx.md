# Install CLI

```sh
curl -fsSL https://cli.inference.sh | sh
belt login
```

## What does the installer do?

The install script detects your OS and architecture, downloads the correct binary from dist.inference.sh, verifies its SHA-256 checksum, and places it in your PATH. That's it — no elevated permissions, no background processes, no telemetry. If you have cosign installed, the installer also verifies the Sigstore signature automatically.

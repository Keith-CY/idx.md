---
stable_id: skills/skills-sh-davila7-claude-code-templates-pytorch-lightning
type: skills
title: skills-sh-davila7-claude-code-templates-pytorch-lightning
summary: >-
  # PyTorch Lightning Callbacks

  ## Overview

  Callbacks add functionality to training without modifying the LightningModule.
  They capture **non-essential logic** like checkpointing, early stopping, and
  logging.

  ## Built-In Callbacks

  ### 1. ModelCheckpoint

  **Saves best models during training**:

  ```python

  from lightning.pytorch.callbacks import ModelCheckpoint

  # Save top 3 models based on validation loss

  checkpoint = ModelCheckpoint(
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/davila7/claude-code-templates/main/cli-tool/components/skills/ai-research/distributed-training-pytorch-lightning/references/callbacks.md
license: ""
upstream_ref: https://skills.sh/davila7/claude-code-templates/pytorch-lightning
retrieved_at: 2026-02-07T05:27:03.808Z
content_sha256: 2940b978bdec21b6f8da54c72d1858015e5ba290f9b05f1a659d67c25860e259
---

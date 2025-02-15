import fs from 'fs/promises';
import path from 'path';

const template = `/// <reference types="expo-router/types" />

// NOTE: This file should not be edited and should be in your git ignore`;

export async function writeExpoEnvDTS(projectRoot: string) {
  return fs.writeFile(path.join(projectRoot, 'expo-env.d.ts'), template);
}

export async function removeExpoEnvDTS(projectRoot: string) {
  return fs.rm(path.join(projectRoot, 'expo-env.d.ts'), {
    force: true,
  });
}

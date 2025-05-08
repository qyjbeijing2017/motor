import { defineConfig } from 'tsup'
import { existsSync } from 'fs'
import { lstat, mkdir, readdir, copyFile } from 'fs/promises'


export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    async onSuccess() {
        const copy = async (target: string, dest: string) => {
            const stat = await lstat(target)
            if (stat.isDirectory()) {
                if (!existsSync(dest)) {
                    await mkdir(dest, { recursive: true })
                }
                const files = await readdir(target)
                for (const file of files) {
                    const srcPath = `${target}/${file}`
                    const destPath = `${dest}/${file}`
                    await copy(srcPath, destPath)
                }
            } else {
                await copyFile(target, dest)
            }
        }

        await copy('./package.json', './dist/package.json')
        await copy('./README.md', './dist/README.md')
        await copy('./LICENSE', './dist/LICENSE')
        await copy('./doc', './dist/doc')
    },
})
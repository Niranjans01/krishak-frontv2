{
    "extends": "../tsconfig.json",
    "compilerOptions": {
        "outDir": "../out-tsc/e2e",
        "module": "commonjs",
        "target": "es5",
        "types": ["chai", "cucumber", "node"]
    }
}
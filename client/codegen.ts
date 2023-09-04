import type { CodegenConfig } from '@graphql-codegen/cli';

const host = process.env.HOST || 'localhost';

const config: CodegenConfig = {
  overwrite: true,
  verbose: true,
  schema: `http://${host}:9999`,
  documents: 'src/documents/*.gql',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/generated/index.ts': {
      config: {
        useTypeImports: true,
      },
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};

export default config;

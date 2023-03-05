import type { CodegenConfig } from '@graphql-codegen/cli';

const host = process.env.HOST || 'server';

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://${host}:9876/graphql`,
  documents: 'src/documents/*.gql',
  generates: {
    './src/generated/index.ts': {
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

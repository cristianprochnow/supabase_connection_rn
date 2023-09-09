# Supabase connection with React Native

## Getting Started

### `.env`

Create an `.env` file in project directory root with info for Supabase connection. So in this file, set data below.

```bash
# .env

API_URL=<supabase-project-url>
API_KEY=<supabase-project-anon-key>
```

More details about this configuration can be found in [Supabase Docs](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs).

### React Native

After this config, run commands below to run mobile project.

```bash
$ npm install # Install packages
$ npx react-native run-android # Run Android Project
```
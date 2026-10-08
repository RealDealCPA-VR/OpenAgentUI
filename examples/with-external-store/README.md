# External Store Integration

This example demonstrates how to use openagentui with an external message store using `useExternalStoreRuntime`.

## Quick Start

### Using CLI (Recommended)

```bash
npx openagentui@latest create my-app --example with-external-store
cd my-app
```

### Environment Variables

Create `.env.local`:

```
OPENAI_API_KEY=sk-...
```

### Run

```bash
npm run dev
```

## Features

- External store runtime via `useExternalStoreRuntime`
- Custom message state management
- React state-based message storage
- Message conversion utilities

## Related Documentation

- [openagentui Documentation](https://openagentui.dev/docs)
- [External Store Runtime Guide](https://openagentui.dev/docs/runtimes/custom/external-store)

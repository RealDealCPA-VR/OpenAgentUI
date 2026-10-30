## aui-perf nightly record

_23 points · 2026-10-08T04:44:32.688Z to 2026-10-30T04:34:05.749Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.124ms | +0.7% |  | 635.00µs | 1.463ms | 23 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.265ms | -0.7% |  | 715.47µs | 1.578ms | 23 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.21µs | -1.8% |  | 32.96µs | 79.09µs | 23 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 666.40µs | +0.3% |  | 362.82µs | 846.98µs | 23 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.086ms | -2.1% |  | 5.720ms | 13.053ms | 23 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 302.37µs | -3.7% |  | 157.97µs | 385.26µs | 23 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.581ms | +0.1% |  | 1.391ms | 3.281ms | 23 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 9.888ms | -2.6% |  | 5.591ms | 13.004ms | 23 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.28µs | +0.5% |  | 5.92µs | 15.14µs | 23 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 90.04µs | +0.2% |  | 46.46µs | 126.55µs | 23 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 354.25µs | -0.5% |  | 183.90µs | 499.01µs | 23 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 76.17µs | +6.1% |  | 46.47µs | 76.17µs | 23 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 737.61µs | +2.8% |  | 402.17µs | 753.20µs | 23 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.05µs | -3.0% |  | 5.54µs | 11.01µs | 23 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 83.45µs | -7.5% |  | 45.85µs | 90.23µs | 23 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 767.38µs | -4.3% |  | 385.78µs | 1.273ms | 23 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.000ms | -1.7% |  | 3.432ms | 10.272ms | 23 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 23.404ms | -4.8% |  | 13.513ms | 41.163ms | 23 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 418.11µs | +3.8% |  | 228.27µs | 737.93µs | 23 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.738ms | +3.2% |  | 2.016ms | 6.315ms | 23 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 15.082ms | +3.3% |  | 8.037ms | 24.876ms | 23 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.61µs | -1.2% |  | 29.58µs | 58.39µs | 23 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 594.87µs | -1.8% |  | 317.99µs | 611.05µs | 23 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.278ms | -1.6% |  | 1.738ms | 3.397ms | 23 |
| external-message-conversion › core: external message tool results › 100 matches | 85.18µs | -1.5% |  | 40.51µs | 86.47µs | 23 |
| external-message-conversion › core: external message tool results › 1000 matches | 879.16µs | +0.3% |  | 416.72µs | 879.16µs | 23 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.713ms | +1.0% |  | 2.265ms | 4.731ms | 23 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.69µs | -0.5% |  | 24.02µs | 53.15µs | 23 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 503.32µs | +0.0% |  | 229.02µs | 510.27µs | 23 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.844ms | +2.3% |  | 1.338ms | 2.844ms | 23 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs | -1.7% |  | 0.13µs | 0.27µs | 23 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | -0.4% |  | 0.24µs | 0.52µs | 23 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.43µs | -3.2% |  | 1.42µs | 2.53µs | 23 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.72µs | -4.1% |  | 0.42µs | 0.84µs | 23 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.36µs | -9.5% |  | 2.03µs | 4.82µs | 23 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 40.52µs | -11.0% |  | 18.00µs | 45.51µs | 23 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 164.93µs | +2.5% |  | 91.13µs | 168.10µs | 23 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.153ms | +6.5% |  | 635.33µs | 1.153ms | 23 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.692ms | -6.3% |  | 1.257ms | 2.874ms | 23 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.990ms | -5.3% |  | 1.441ms | 3.158ms | 23 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 18.296ms | +1.5% |  | 9.092ms | 18.296ms | 23 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.818ms | +2.2% |  | 10.175ms | 19.818ms | 23 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.629ms | -8.8% |  | 732.15µs | 1.786ms | 23 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.180ms | -1.2% |  | 1.363ms | 3.255ms | 23 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 10.152ms | +7.8% |  | 5.234ms | 10.152ms | 23 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.182ms | +3.1% |  | 1.124ms | 1.678ms | 23 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 2.017ms | +21.7% |  | 1.167ms | 2.017ms | 23 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.532ms | +3.5% |  | 2.493ms | 5.159ms | 23 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 284.42µs | -0.6% |  | 163.93µs | 305.15µs | 23 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.243ms | -1.0% |  | 1.458ms | 2.495ms | 23 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 317.572ms | -1.2% |  | 168.933ms | 354.777ms | 23 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 11.027ms | -8.2% |  | 7.346ms | 12.037ms | 23 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.45µs | +5.2% |  | 1.24µs | 4.55µs | 23 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.54µs | -1.3% |  | 6.08µs | 21.65µs | 23 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 37.43µs | -2.3% |  | 18.08µs | 90.02µs | 23 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.88µs | -0.1% |  | 3.08µs | 6.18µs | 23 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 21.08µs | +13.3% |  | 12.17µs | 26.88µs | 23 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.96µs | -0.2% |  | 29.59µs | 60.24µs | 23 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 699.44µs | +1.5% |  | 435.95µs | 699.44µs | 23 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.000ms | -15.0% |  | 2.746ms | 8.233ms | 23 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 41.351ms | -9.5% |  | 17.633ms | 45.681ms | 23 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 387.391ms | -10.1% |  | 237.981ms | 430.807ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 699.63µs | -5.8% |  | 256.48µs | 784.19µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.028ms | -17.7% |  | 445.26µs | 1.249ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 5.123ms | +19.2% |  | 2.161ms | 5.579ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 680.12µs | -9.9% |  | 255.34µs | 754.69µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.273ms | +11.0% |  | 987.37µs | 2.602ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 40.366ms | +9.9% |  | 13.190ms | 41.901ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 692.99µs | +1.5% |  | 229.94µs | 762.51µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.742ms | +5.3% |  | 718.25µs | 2.048ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 32.686ms | +33.3% |  | 9.325ms | 33.660ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 326.68µs | -11.0% |  | 110.32µs | 366.94µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 521.73µs | -5.6% |  | 219.94µs | 624.09µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.698ms | -1.7% |  | 1.508ms | 4.209ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.95µs | +6.4% |  | 8.35µs | 24.95µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 41.18µs | +7.2% |  | 17.84µs | 41.18µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 261.84µs | +12.0% |  | 122.88µs | 261.84µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 729.78µs | +5.6% |  | 253.94µs | 807.82µs | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.434ms | -2.7% |  | 639.06µs | 1.684ms | 23 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 26.413ms | +19.6% |  | 7.649ms | 27.010ms | 23 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 265.45µs | -0.2% |  | 140.47µs | 322.08µs | 23 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.283ms | +0.4% |  | 1.263ms | 2.708ms | 23 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.160ms | +0.1% |  | 638.71µs | 1.382ms | 23 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 303.26µs | -3.2% |  | 176.39µs | 520.95µs | 23 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.634ms | +0.3% |  | 1.528ms | 4.267ms | 23 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.319ms | -1.1% |  | 790.67µs | 2.173ms | 23 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 338.05µs | +0.3% |  | 166.26µs | 356.68µs | 23 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.560ms | -2.5% |  | 13.845ms | 27.242ms | 23 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 663.517ms | -1.1% |  | 369.530ms | 1171.337ms | 23 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 267.89µs | +3.4% |  | 140.00µs | 470.51µs | 23 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.031ms | +4.2% |  | 1.149ms | 3.593ms | 23 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.057ms | +2.8% |  | 602.33µs | 1.837ms | 23 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.316ms | -3.7% |  | 1.848ms | 4.588ms | 23 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.305ms | -4.7% |  | 1.784ms | 4.331ms | 23 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.268ms | -3.6% |  | 1.764ms | 4.046ms | 23 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 3.848ms | -21.6% |  | 1.871ms | 4.909ms | 23 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.040ms | -0.7% |  | 1.060ms | 2.201ms | 23 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.203ms | -3.5% |  | 1.650ms | 3.319ms | 23 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.140ms | -2.8% |  | 1.650ms | 3.276ms | 23 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 250.02µs | +5.3% |  | 143.50µs | 296.51µs | 23 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 138.43µs | -2.1% |  | 75.47µs | 141.34µs | 23 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.648ms | -0.8% |  | 856.60µs | 1.768ms | 23 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.913ms | +4.8% |  | 862.32µs | 1.958ms | 23 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.103ms | +1.1% |  | 924.99µs | 2.133ms | 23 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 86.42µs | +7.3% |  | 41.75µs | 86.42µs | 23 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.513ms | +0.4% |  | 712.69µs | 1.581ms | 23 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 74.26µs | +10.8% |  | 36.56µs | 74.26µs | 23 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.487ms | +2.2% |  | 741.79µs | 1.546ms | 23 |

informational; points come from different runners of the same class, so read trends, not single deltas.

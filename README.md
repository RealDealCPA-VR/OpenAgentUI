## aui-perf nightly record

_8 points · 2026-10-08T04:44:32.688Z to 2026-10-15T04:38:41.371Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 654.26µs |  |  | 654.26µs | 1.463ms | 8 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 737.35µs |  |  | 737.35µs | 1.578ms | 8 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 35.42µs |  |  | 35.42µs | 79.09µs | 8 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 399.78µs |  |  | 399.78µs | 846.98µs | 8 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 6.046ms |  |  | 6.046ms | 13.053ms | 8 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 166.31µs |  |  | 166.31µs | 385.26µs | 8 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.514ms |  |  | 1.514ms | 3.281ms | 8 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.927ms |  |  | 5.927ms | 13.004ms | 8 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 6.19µs |  |  | 6.19µs | 15.14µs | 8 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 50.20µs |  |  | 50.20µs | 126.55µs | 8 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 194.96µs |  |  | 194.96µs | 499.01µs | 8 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 46.51µs |  |  | 46.51µs | 76.13µs | 8 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 435.47µs |  |  | 402.17µs | 753.20µs | 8 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.98µs |  |  | 5.82µs | 11.01µs | 8 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 53.17µs |  |  | 47.09µs | 90.22µs | 8 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 403.21µs |  |  | 403.21µs | 1.273ms | 8 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.590ms |  |  | 3.590ms | 10.272ms | 8 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 14.130ms |  |  | 14.130ms | 41.163ms | 8 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 253.59µs |  |  | 253.59µs | 737.93µs | 8 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.269ms |  |  | 2.269ms | 6.315ms | 8 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 8.865ms |  |  | 8.865ms | 24.876ms | 8 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 30.52µs |  |  | 29.58µs | 58.39µs | 8 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 332.77µs |  |  | 323.51µs | 611.05µs | 8 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.800ms |  |  | 1.738ms | 3.397ms | 8 |
| external-message-conversion › core: external message tool results › 100 matches | 42.39µs |  |  | 41.28µs | 83.83µs | 8 |
| external-message-conversion › core: external message tool results › 1000 matches | 416.72µs |  |  | 416.72µs | 853.92µs | 8 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.313ms |  |  | 2.272ms | 4.731ms | 8 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 24.40µs |  |  | 24.40µs | 53.09µs | 8 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 236.13µs |  |  | 236.13µs | 507.44µs | 8 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.358ms |  |  | 1.358ms | 2.775ms | 8 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs |  |  | 0.13µs | 0.27µs | 8 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.25µs |  |  | 0.24µs | 0.52µs | 8 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.51µs |  |  | 1.49µs | 2.53µs | 8 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.44µs |  |  | 0.42µs | 0.84µs | 8 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.20µs |  |  | 2.10µs | 4.65µs | 8 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.63µs |  |  | 18.98µs | 43.52µs | 8 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 98.55µs |  |  | 91.13µs | 159.76µs | 8 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 693.12µs |  |  | 635.33µs | 1.049ms | 8 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.345ms |  |  | 1.321ms | 2.814ms | 8 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.524ms |  |  | 1.520ms | 3.090ms | 8 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.476ms |  |  | 9.092ms | 17.638ms | 8 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.913ms |  |  | 10.670ms | 19.495ms | 8 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 973.80µs |  |  | 878.78µs | 1.784ms | 8 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.461ms |  |  | 1.427ms | 3.195ms | 8 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.246ms |  |  | 5.246ms | 9.793ms | 8 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.425ms |  |  | 1.124ms | 1.678ms | 8 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.377ms |  |  | 1.290ms | 1.720ms | 8 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.339ms |  |  | 3.339ms | 4.760ms | 8 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 184.25µs |  |  | 163.93µs | 305.15µs | 8 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.753ms |  |  | 1.458ms | 2.495ms | 8 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 181.104ms |  |  | 169.554ms | 354.777ms | 8 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.699ms |  |  | 7.699ms | 12.037ms | 8 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.33µs |  |  | 1.24µs | 4.55µs | 8 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.34µs |  |  | 6.08µs | 21.65µs | 8 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 19.45µs |  |  | 19.39µs | 90.02µs | 8 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.31µs |  |  | 3.21µs | 6.01µs | 8 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.10µs |  |  | 12.17µs | 26.88µs | 8 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.62µs |  |  | 29.99µs | 60.24µs | 8 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 451.75µs |  |  | 435.95µs | 634.74µs | 8 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.886ms |  |  | 3.482ms | 7.626ms | 8 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 19.701ms |  |  | 18.667ms | 42.722ms | 8 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 274.955ms |  |  | 256.386ms | 393.630ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 292.85µs |  |  | 269.12µs | 784.19µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 450.92µs |  |  | 447.81µs | 1.131ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.276ms |  |  | 2.276ms | 5.579ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 266.49µs |  |  | 266.49µs | 679.97µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.087ms |  |  | 987.37µs | 2.602ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 19.350ms |  |  | 18.282ms | 38.535ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 292.98µs |  |  | 257.90µs | 758.11µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 863.77µs |  |  | 812.75µs | 2.048ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 13.459ms |  |  | 13.459ms | 32.325ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 128.34µs |  |  | 120.14µs | 359.26µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 256.89µs |  |  | 236.65µs | 624.09µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.214ms |  |  | 1.684ms | 4.209ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 10.00µs |  |  | 9.23µs | 23.58µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 19.45µs |  |  | 18.80µs | 37.94µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 135.00µs |  |  | 132.08µs | 238.00µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 319.94µs |  |  | 286.94µs | 805.74µs | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 723.01µs |  |  | 679.64µs | 1.598ms | 8 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 17.034ms |  |  | 13.163ms | 26.406ms | 8 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 148.13µs |  |  | 148.13µs | 322.08µs | 8 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.360ms |  |  | 1.360ms | 2.708ms | 8 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 678.79µs |  |  | 678.79µs | 1.382ms | 8 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 178.73µs |  |  | 178.73µs | 520.95µs | 8 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.582ms |  |  | 1.582ms | 4.267ms | 8 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 795.51µs |  |  | 795.51µs | 2.173ms | 8 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 174.66µs |  |  | 174.66µs | 348.09µs | 8 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.380ms |  |  | 14.272ms | 26.729ms | 8 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 383.543ms |  |  | 369.530ms | 793.101ms | 8 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 140.00µs |  |  | 140.00µs | 470.51µs | 8 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.183ms |  |  | 1.183ms | 3.593ms | 8 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 611.24µs |  |  | 611.24µs | 1.837ms | 8 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.016ms |  |  | 1.855ms | 4.272ms | 8 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.960ms |  |  | 1.784ms | 4.121ms | 8 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.876ms |  |  | 1.764ms | 4.046ms | 8 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.036ms |  |  | 2.020ms | 4.878ms | 8 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.124ms |  |  | 1.060ms | 2.201ms | 8 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.773ms |  |  | 1.665ms | 3.281ms | 8 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.769ms |  |  | 1.691ms | 3.276ms | 8 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 151.61µs |  |  | 148.91µs | 296.51µs | 8 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 80.26µs |  |  | 77.61µs | 141.27µs | 8 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 936.21µs |  |  | 856.60µs | 1.768ms | 8 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 943.23µs |  |  | 892.90µs | 1.958ms | 8 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.003ms |  |  | 924.99µs | 2.125ms | 8 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 48.05µs |  |  | 42.65µs | 83.30µs | 8 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 755.99µs |  |  | 755.99µs | 1.543ms | 8 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 38.89µs |  |  | 36.82µs | 73.49µs | 8 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 774.32µs |  |  | 741.79µs | 1.498ms | 8 |

informational; points come from different runners of the same class, so read trends, not single deltas.

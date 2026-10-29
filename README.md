## aui-perf nightly record

_22 points · 2026-10-08T04:44:32.688Z to 2026-10-29T04:32:58.146Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 642.36µs | -8.4% |  | 635.00µs | 1.463ms | 22 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 731.76µs | -5.2% |  | 715.47µs | 1.578ms | 22 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 33.04µs | -7.8% |  | 32.96µs | 79.09µs | 22 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 362.82µs | -8.5% |  | 362.82µs | 846.98µs | 22 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 5.720ms | -7.2% |  | 5.720ms | 13.053ms | 22 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 164.05µs | -4.8% |  | 157.97µs | 385.26µs | 22 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.391ms | -10.6% |  | 1.391ms | 3.281ms | 22 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.771ms | -6.1% |  | 5.591ms | 13.004ms | 22 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 5.92µs | -9.0% |  | 5.92µs | 15.14µs | 22 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 46.46µs | -8.9% |  | 46.46µs | 126.55µs | 22 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 191.41µs | -4.9% |  | 183.90µs | 499.01µs | 22 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 47.40µs | +1.8% |  | 46.47µs | 76.13µs | 22 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 405.26µs | -4.4% |  | 402.17µs | 753.20µs | 22 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.54µs | -8.8% |  | 5.54µs | 11.01µs | 22 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 45.85µs | -9.2% |  | 45.85µs | 90.23µs | 22 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 385.78µs | -4.5% |  | 385.78µs | 1.273ms | 22 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.432ms | -2.8% |  | 3.432ms | 10.272ms | 22 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 13.513ms | -4.7% |  | 13.513ms | 41.163ms | 22 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 228.27µs | -10.9% |  | 228.27µs | 737.93µs | 22 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.016ms | -9.9% |  | 2.016ms | 6.315ms | 22 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 8.037ms | -10.4% |  | 8.037ms | 24.876ms | 22 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 30.11µs | -3.4% |  | 29.58µs | 58.39µs | 22 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 317.99µs | -5.5% |  | 317.99µs | 611.05µs | 22 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.762ms | -4.5% |  | 1.738ms | 3.397ms | 22 |
| external-message-conversion › core: external message tool results › 100 matches | 40.51µs | -5.9% |  | 40.51µs | 86.47µs | 22 |
| external-message-conversion › core: external message tool results › 1000 matches | 419.32µs | -3.3% |  | 416.72µs | 876.68µs | 22 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.265ms | -4.9% |  | 2.265ms | 4.731ms | 22 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 24.02µs | -11.4% |  | 24.02µs | 53.15µs | 22 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 229.02µs | -11.9% |  | 229.02µs | 510.27µs | 22 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.338ms | -8.5% |  | 1.338ms | 2.814ms | 22 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs | -3.0% |  | 0.13µs | 0.27µs | 22 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.24µs | -5.9% |  | 0.24µs | 0.52µs | 22 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.42µs | -8.1% |  | 1.42µs | 2.53µs | 22 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.42µs | -7.7% |  | 0.42µs | 0.84µs | 22 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.03µs | -8.4% |  | 2.03µs | 4.82µs | 22 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 18.00µs | -7.4% |  | 18.00µs | 45.51µs | 22 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 92.35µs | -5.4% |  | 91.13µs | 168.10µs | 22 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 638.75µs | -7.7% |  | 635.33µs | 1.145ms | 22 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.257ms | -9.6% |  | 1.257ms | 2.874ms | 22 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.441ms | -9.7% |  | 1.441ms | 3.158ms | 22 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.393ms | -3.4% |  | 9.092ms | 18.024ms | 22 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.175ms | -7.6% |  | 10.175ms | 19.495ms | 22 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 732.15µs | -23.1% |  | 732.15µs | 1.786ms | 22 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.392ms | -5.6% |  | 1.363ms | 3.255ms | 22 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.241ms | -4.3% |  | 5.234ms | 9.793ms | 22 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.169ms | -2.4% |  | 1.124ms | 1.678ms | 22 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.167ms | -11.2% |  | 1.167ms | 2.017ms | 22 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.119ms | +22.1% |  | 2.493ms | 5.159ms | 22 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 164.45µs | -7.1% |  | 163.93µs | 305.15µs | 22 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.459ms | -11.0% |  | 1.458ms | 2.495ms | 22 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 171.768ms | -6.2% |  | 168.933ms | 354.777ms | 22 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.346ms | -4.8% |  | 7.346ms | 12.037ms | 22 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.27µs | -6.4% |  | 1.24µs | 4.55µs | 22 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.19µs | -0.3% |  | 6.08µs | 21.65µs | 22 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 18.08µs | -4.3% |  | 18.08µs | 90.02µs | 22 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.08µs | -10.7% |  | 3.08µs | 6.18µs | 22 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 12.39µs | -4.2% |  | 12.17µs | 26.88µs | 22 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 29.59µs | -5.7% |  | 29.59µs | 60.24µs | 22 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 447.54µs | -6.3% |  | 435.95µs | 689.42µs | 22 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 2.746ms | -27.5% |  | 2.746ms | 8.233ms | 22 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 17.633ms | -7.0% |  | 17.633ms | 45.681ms | 22 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 237.981ms | -15.7% |  | 237.981ms | 430.807ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 256.48µs | -11.2% |  | 256.48µs | 784.19µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 445.26µs | -14.7% |  | 445.26µs | 1.249ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.252ms | -10.9% |  | 2.161ms | 5.579ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 255.34µs | -12.7% |  | 255.34µs | 754.69µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 997.82µs | -15.5% |  | 987.37µs | 2.602ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 14.860ms | -59.3% |  | 13.190ms | 41.901ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 229.94µs | -22.1% |  | 229.94µs | 762.51µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 718.25µs | -15.0% |  | 718.25µs | 2.048ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 9.472ms | -33.3% |  | 9.325ms | 33.660ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 110.32µs | -12.6% |  | 110.32µs | 366.94µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 219.94µs | -19.3% |  | 219.94µs | 624.09µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.508ms | -34.4% |  | 1.508ms | 4.209ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 8.79µs | -14.0% |  | 8.35µs | 24.72µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 17.84µs | -14.5% |  | 17.84µs | 38.42µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 122.88µs | -8.1% |  | 122.88µs | 248.27µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 253.94µs | -13.6% |  | 253.94µs | 807.82µs | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 639.06µs | -16.3% |  | 639.06µs | 1.684ms | 22 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 9.131ms | -29.2% |  | 7.649ms | 27.010ms | 22 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 140.47µs | -7.4% |  | 140.47µs | 322.08µs | 22 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.263ms | -8.3% |  | 1.263ms | 2.708ms | 22 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 638.71µs | -7.4% |  | 638.71µs | 1.382ms | 22 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 176.50µs | -5.8% |  | 176.39µs | 520.95µs | 22 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.528ms | -6.9% |  | 1.528ms | 4.267ms | 22 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 790.67µs | -5.2% |  | 790.67µs | 2.173ms | 22 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 166.26µs | -7.4% |  | 166.26µs | 356.68µs | 22 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 13.845ms | -7.5% |  | 13.845ms | 27.242ms | 22 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 371.567ms | -7.2% |  | 369.530ms | 1171.337ms | 22 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 151.53µs | -0.2% |  | 140.00µs | 470.51µs | 22 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.149ms | -5.8% |  | 1.149ms | 3.593ms | 22 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 606.59µs | -3.2% |  | 602.33µs | 1.837ms | 22 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.503ms | +24.0% |  | 1.848ms | 4.588ms | 22 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.428ms | +22.4% |  | 1.784ms | 4.331ms | 22 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.374ms | +22.7% |  | 1.764ms | 4.046ms | 22 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 1.871ms | -12.3% |  | 1.871ms | 4.909ms | 22 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.074ms | -2.6% |  | 1.060ms | 2.201ms | 22 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.650ms | -6.1% |  | 1.650ms | 3.319ms | 22 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.650ms | -2.0% |  | 1.650ms | 3.276ms | 22 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 143.50µs | -9.1% |  | 143.50µs | 296.51µs | 22 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 75.47µs | -5.9% |  | 75.47µs | 141.34µs | 22 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 868.75µs | -1.3% |  | 856.60µs | 1.768ms | 22 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 862.32µs | -6.8% |  | 862.32µs | 1.958ms | 22 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 927.24µs | -7.5% |  | 924.99µs | 2.133ms | 22 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 41.75µs | -5.4% |  | 41.75µs | 83.30µs | 22 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 712.69µs | -6.0% |  | 712.69µs | 1.581ms | 22 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 36.56µs | -6.7% |  | 36.56µs | 73.49µs | 22 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 753.29µs | -1.9% |  | 741.79µs | 1.546ms | 22 |

informational; points come from different runners of the same class, so read trends, not single deltas.

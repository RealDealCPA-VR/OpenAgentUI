## aui-perf nightly record

_27 points · 2026-10-08T04:44:32.688Z to 2026-11-03T04:30:37.728Z · latest runner: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.138ms | +72.2% |  | 635.00µs | 1.463ms | 27 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.296ms | +75.0% |  | 715.47µs | 1.578ms | 27 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 65.85µs | +86.9% |  | 32.96µs | 79.09µs | 27 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 729.65µs | +88.9% |  | 362.82µs | 846.98µs | 27 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 11.291ms | +88.2% |  | 5.720ms | 13.053ms | 27 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 319.25µs | +89.2% |  | 157.97µs | 385.26µs | 27 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.802ms | +87.5% |  | 1.391ms | 3.281ms | 27 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 11.121ms | +89.5% |  | 5.591ms | 13.004ms | 27 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 11.05µs | +76.5% |  | 5.92µs | 15.14µs | 27 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 92.36µs | +84.4% |  | 46.46µs | 126.55µs | 27 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 373.52µs | +92.2% |  | 183.90µs | 499.01µs | 27 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 75.64µs | +62.7% |  | 46.47µs | 76.17µs | 27 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 747.70µs | +76.6% |  | 402.17µs | 753.20µs | 27 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 11.05µs | +89.4% |  | 5.54µs | 11.05µs | 27 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 89.00µs | +77.3% |  | 45.85µs | 90.23µs | 27 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 759.15µs | +92.0% |  | 385.78µs | 1.273ms | 27 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.929ms | +68.7% |  | 3.432ms | 10.272ms | 27 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 23.488ms | +72.1% |  | 13.513ms | 41.163ms | 27 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 448.85µs | +86.2% |  | 228.27µs | 737.93µs | 27 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.821ms | +84.9% |  | 2.016ms | 6.315ms | 27 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 15.253ms | +65.7% |  | 8.037ms | 24.876ms | 27 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 58.85µs | +88.7% |  | 29.58µs | 58.85µs | 27 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 611.65µs | +84.1% |  | 317.99µs | 611.65µs | 27 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.392ms | +86.3% |  | 1.738ms | 3.397ms | 27 |
| external-message-conversion › core: external message tool results › 100 matches | 82.44µs | +86.5% |  | 40.51µs | 86.47µs | 27 |
| external-message-conversion › core: external message tool results › 1000 matches | 844.50µs | +93.4% |  | 416.72µs | 879.16µs | 27 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.688ms | +101.3% |  | 2.265ms | 4.731ms | 27 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 51.27µs | +100.4% |  | 24.02µs | 53.39µs | 27 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 482.96µs | +99.5% |  | 229.02µs | 516.13µs | 27 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.764ms | +99.2% |  | 1.338ms | 2.844ms | 27 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.24µs | +90.5% |  | 0.13µs | 0.27µs | 27 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.48µs | +88.8% |  | 0.24µs | 0.52µs | 27 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.49µs | +61.9% |  | 1.42µs | 2.53µs | 27 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +70.9% |  | 0.42µs | 0.84µs | 27 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.51µs | +95.9% |  | 2.03µs | 4.82µs | 27 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 39.99µs | +93.3% |  | 18.00µs | 45.51µs | 27 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 158.95µs | +71.0% |  | 91.13µs | 168.10µs | 27 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.024ms | +59.3% |  | 635.33µs | 1.175ms | 27 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.675ms | +92.4% |  | 1.257ms | 2.874ms | 27 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.917ms | +84.3% |  | 1.441ms | 3.158ms | 27 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.447ms | +85.7% |  | 9.092ms | 18.296ms | 27 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.587ms | +73.8% |  | 10.175ms | 19.818ms | 27 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.558ms | +68.1% |  | 732.15µs | 1.786ms | 27 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.111ms | +107.7% |  | 1.363ms | 3.255ms | 27 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.885ms | +78.5% |  | 5.234ms | 10.152ms | 27 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.206ms | -10.5% |  | 1.124ms | 1.678ms | 27 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.964ms | +56.5% |  | 1.167ms | 2.017ms | 27 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.339ms | +20.4% |  | 2.493ms | 5.272ms | 27 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 304.75µs | +70.9% |  | 163.93µs | 305.15µs | 27 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.417ms | +49.8% |  | 1.458ms | 2.495ms | 27 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 345.824ms | +92.9% |  | 168.933ms | 354.777ms | 27 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 12.109ms | +56.8% |  | 7.346ms | 12.109ms | 27 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.42µs | +89.8% |  | 1.24µs | 4.55µs | 27 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 11.01µs | +74.5% |  | 6.08µs | 21.65µs | 27 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 47.87µs | +149.1% |  | 18.08µs | 90.02µs | 27 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 6.02µs | +83.6% |  | 3.08µs | 6.18µs | 27 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 25.59µs | +95.0% |  | 12.17µs | 26.88µs | 27 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 57.80µs | +85.8% |  | 29.59µs | 60.24µs | 27 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 602.02µs | +34.6% |  | 435.95µs | 699.44µs | 27 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 5.774ms | +55.7% |  | 2.746ms | 8.233ms | 27 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 32.645ms | +67.2% |  | 17.633ms | 45.681ms | 27 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 343.491ms | +27.2% |  | 237.981ms | 430.807ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 690.22µs | +135.6% |  | 256.48µs | 784.19µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.159ms | +154.5% |  | 445.26µs | 1.249ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.771ms | +109.5% |  | 2.161ms | 5.579ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 693.08µs | +141.0% |  | 255.34µs | 754.69µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.322ms | +117.4% |  | 987.37µs | 2.602ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 37.074ms | +91.9% |  | 13.190ms | 41.901ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 655.81µs | +133.6% |  | 229.94µs | 762.51µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.837ms | +130.7% |  | 718.25µs | 2.048ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 29.109ms | +80.5% |  | 9.325ms | 33.660ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 329.40µs | +167.2% |  | 110.32µs | 366.94µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 559.78µs | +132.5% |  | 219.94µs | 624.09µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.609ms | +107.6% |  | 1.508ms | 4.209ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 19.94µs | +111.6% |  | 8.35µs | 25.23µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 34.15µs | +74.0% |  | 17.84µs | 42.45µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 232.09µs | +78.0% |  | 122.88µs | 275.65µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 640.47µs | +101.0% |  | 253.94µs | 807.82µs | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.594ms | +121.5% |  | 639.06µs | 1.684ms | 27 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 23.608ms | +97.8% |  | 7.649ms | 27.010ms | 27 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 277.49µs | +91.3% |  | 140.47µs | 322.08µs | 27 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.446ms | +86.2% |  | 1.263ms | 2.708ms | 27 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.245ms | +90.4% |  | 638.71µs | 1.382ms | 27 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 326.14µs | +75.7% |  | 176.39µs | 520.95µs | 27 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.732ms | +69.9% |  | 1.528ms | 4.267ms | 27 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.409ms | +72.9% |  | 790.67µs | 2.173ms | 27 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 324.76µs | +86.3% |  | 166.26µs | 356.68µs | 27 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 25.555ms | +80.5% |  | 13.845ms | 27.242ms | 27 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 778.430ms | +98.6% |  | 369.530ms | 1177.339ms | 27 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 269.46µs | +76.7% |  | 140.00µs | 470.51µs | 27 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.100ms | +74.1% |  | 1.149ms | 3.593ms | 27 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.082ms | +75.7% |  | 602.33µs | 1.837ms | 27 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.721ms | +101.3% |  | 1.848ms | 4.588ms | 27 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.707ms | +92.0% |  | 1.784ms | 4.331ms | 27 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.624ms | +101.1% |  | 1.764ms | 4.046ms | 27 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.018ms | +87.6% |  | 1.871ms | 4.909ms | 27 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.191ms | +93.6% |  | 1.060ms | 2.201ms | 27 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.350ms | +88.7% |  | 1.650ms | 3.351ms | 27 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.317ms | +89.1% |  | 1.650ms | 3.367ms | 27 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 285.58µs | +86.7% |  | 143.50µs | 296.51µs | 27 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 116.72µs | +44.2% |  | 75.47µs | 142.80µs | 27 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.757ms | +97.6% |  | 856.60µs | 1.768ms | 27 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 2.022ms | +115.8% |  | 862.32µs | 2.022ms | 27 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.172ms | +114.5% |  | 924.99µs | 2.172ms | 27 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 81.74µs | +83.1% |  | 41.75µs | 86.42µs | 27 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.613ms | +107.5% |  | 712.69µs | 1.613ms | 27 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 71.91µs | +87.5% |  | 36.56µs | 77.52µs | 27 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.546ms | +103.4% |  | 741.79µs | 1.546ms | 27 |

informational; points come from different runners of the same class, so read trends, not single deltas.

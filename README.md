## aui-perf nightly record

_38 points · 2026-10-08T04:44:32.688Z to 2026-11-14T04:29:17.036Z · latest runner: Intel(R) Xeon(R) 6975P-C · Node v24.22.3_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 798.38µs | -15.5% | -44.3% ⚠︎ | 635.00µs | 1.138ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 910.66µs | -15.1% | -41.3% ⚠︎ | 715.47µs | 1.296ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 36.93µs | -20.3% | -53.2% ⚠︎ | 32.96µs | 65.85µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 402.87µs | -24.2% | -50.3% ⚠︎ | 362.82µs | 729.65µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 6.040ms | -27.1% | -51.8% ⚠︎ | 5.720ms | 11.291ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 175.10µs | -28.3% | -54.4% ⚠︎ | 157.97µs | 319.25µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.540ms | -26.5% | -51.3% ⚠︎ | 1.391ms | 2.802ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.981ms | -27.5% | -51.6% ⚠︎ | 5.591ms | 11.121ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 7.34µs | -15.7% | -49.5% ⚠︎ | 5.92µs | 11.05µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 59.64µs | -17.7% | -51.5% ⚠︎ | 46.46µs | 92.36µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 235.66µs | -17.6% | -51.4% ⚠︎ | 183.90µs | 373.52µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 52.28µs | -11.0% | -27.9% ⚠︎ | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 474.68µs | -13.8% | -32.9% ⚠︎ | 405.26µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 7.01µs | -4.3% | -31.1% ⚠︎ | 5.54µs | 15.04µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 56.46µs | -9.1% | -32.2% ⚠︎ | 45.85µs | 122.99µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 448.07µs | -23.5% | -64.8% ⚠︎ | 385.78µs | 801.82µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.808ms | -24.9% | -62.9% ⚠︎ | 3.432ms | 6.178ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 14.960ms | -26.4% | -63.2% ⚠︎ | 13.513ms | 24.731ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 243.47µs | -25.2% | -66.1% ⚠︎ | 228.27µs | 448.85µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.144ms | -27.8% | -65.2% ⚠︎ | 2.016ms | 3.821ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 8.557ms | -29.3% | -65.3% ⚠︎ | 8.037ms | 15.253ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 38.53µs | -12.9% | -31.1% ⚠︎ | 30.11µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 391.85µs | -14.8% | -33.2% ⚠︎ | 317.99µs | 645.76µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.199ms | -12.5% | -31.9% ⚠︎ | 1.755ms | 3.498ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 58.59µs | -6.5% | -30.1% ⚠︎ | 40.51µs | 86.78µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 610.92µs | -5.0% | -28.1% ⚠︎ | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 3.433ms | -1.4% | -25.2% ⚠︎ | 2.265ms | 4.728ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 34.75µs | -7.7% | -34.6% ⚠︎ | 24.02µs | 54.38µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 343.84µs | -3.7% | -32.2% ⚠︎ | 229.02µs | 519.28µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.954ms | -6.6% | -29.6% ⚠︎ | 1.338ms | 2.871ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.17µs | -7.5% | -25.6% ⚠︎ | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.30µs | -10.6% | -32.9% ⚠︎ | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.61µs | -24.2% | -35.1% ⚠︎ | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.45µs | -18.2% | -39.8% ⚠︎ | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.97µs | -5.6% | -35.5% ⚠︎ | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 29.19µs | +1.5% | -32.1% ⚠︎ | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 121.38µs | -1.8% | -24.0% ⚠︎ | 92.35µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 838.28µs | -2.8% | -20.1% ⚠︎ | 638.75µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.718ms | -15.5% | -37.1% ⚠︎ | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.912ms | -11.4% | -37.9% ⚠︎ | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 10.798ms | -22.3% | -38.7% ⚠︎ | 9.369ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 12.030ms | -19.1% | -36.4% ⚠︎ | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.102ms | +7.4% | -37.2% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.904ms | -8.1% | -38.7% ⚠︎ | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 6.476ms | -8.2% | -31.3% ⚠︎ | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.258ms | -15.1% | +9.1% | 1.142ms | 1.482ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.421ms | +1.7% | -17.4% ⚠︎ | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.750ms | -20.5% | -21.2% ⚠︎ | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 188.89µs | -17.4% | -31.3% ⚠︎ | 164.45µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.709ms | -15.0% | -22.3% ⚠︎ | 1.459ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 195.577ms | -18.6% | -37.6% ⚠︎ | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.987ms | -20.4% | -26.5% ⚠︎ | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.41µs | -23.9% | -38.0% ⚠︎ | 1.27µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 8.26µs | -11.4% | -8.2% | 6.19µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 34.70µs | +7.7% | -7.8% | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.74µs | +15.3% | -3.1% | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 15.16µs | -8.3% | -18.2% ⚠︎ | 12.39µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 45.86µs | +15.9% | -2.1% | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 456.86µs | -24.4% | -27.4% ⚠︎ | 446.13µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 4.066ms | -4.9% | -46.4% ⚠︎ | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 22.009ms | -4.1% | -47.7% ⚠︎ | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 273.102ms | -7.8% | -30.6% ⚠︎ | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 428.53µs | -2.5% | -41.3% ⚠︎ | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 808.71µs | +9.7% | -21.9% ⚠︎ | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 3.196ms | +7.4% | -23.4% ⚠︎ | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 412.64µs | -16.4% | -34.1% ⚠︎ | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.946ms | +18.5% | -16.6% ⚠︎ | 984.70µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 18.775ms | -9.9% | -27.3% ⚠︎ | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 422.53µs | -3.6% | -41.8% ⚠︎ | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.658ms | +29.5% | -4.9% | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 12.838ms | -14.1% | -36.5% ⚠︎ | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 167.77µs | -18.6% | -53.3% ⚠︎ | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 395.96µs | +2.1% | -29.1% ⚠︎ | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.918ms | +27.0% | -6.9% | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 11.73µs | -9.2% | -50.2% ⚠︎ | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 23.48µs | -16.1% | -37.6% ⚠︎ | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 161.88µs | -21.4% | -32.0% ⚠︎ | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 404.14µs | -13.3% | -49.1% ⚠︎ | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.346ms | +20.9% | -6.7% | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 12.873ms | -13.4% | -17.8% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 169.43µs | -18.2% | -45.7% ⚠︎ | 140.47µs | 277.49µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.552ms | -15.0% | -41.2% ⚠︎ | 1.263ms | 2.446ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 778.71µs | -15.5% | -42.2% ⚠︎ | 638.71µs | 1.245ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 195.52µs | -22.9% | -62.2% ⚠︎ | 176.39µs | 326.14µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.694ms | -23.2% | -59.9% ⚠︎ | 1.528ms | 2.732ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 856.34µs | -22.9% | -60.4% ⚠︎ | 790.67µs | 1.409ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 237.42µs | -2.0% | -31.5% ⚠︎ | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 18.660ms | -10.1% | -30.2% ⚠︎ | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 678.607ms | +47.7% | -6.1% | 371.567ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 154.82µs | -25.1% | -67.1% ⚠︎ | 140.00µs | 270.93µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.184ms | -28.2% | -67.1% ⚠︎ | 1.149ms | 2.100ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 602.22µs | -29.6% | -67.2% ⚠︎ | 602.22µs | 1.082ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.202ms | -20.6% | -48.5% ⚠︎ | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.220ms | -19.7% | -46.1% ⚠︎ | 1.907ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.194ms | -18.9% | -45.8% ⚠︎ | 1.802ms | 4.017ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.156ms | -23.9% | -55.8% ⚠︎ | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.337ms | -14.6% | -34.8% ⚠︎ | 1.074ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.081ms | -16.0% | -35.6% ⚠︎ | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.021ms | -18.7% | -38.0% ⚠︎ | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 187.41µs | -0.9% | -19.0% ⚠︎ | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 93.02µs | -11.6% | -33.4% ⚠︎ | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.043ms | -19.6% | -37.7% ⚠︎ | 868.75µs | 1.782ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.194ms | -16.5% | -34.8% ⚠︎ | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.264ms | -20.4% | -38.2% ⚠︎ | 927.24µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 61.44µs | -8.6% | -21.5% ⚠︎ | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 914.68µs | -25.1% | -40.7% ⚠︎ | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 54.06µs | -6.0% | -17.9% ⚠︎ | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 897.98µs | -23.7% | -40.1% ⚠︎ | 743.36µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.

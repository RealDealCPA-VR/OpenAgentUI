## aui-perf nightly record

_20 points · 2026-10-08T04:44:32.688Z to 2026-10-27T04:40:55.820Z · latest runner: INTEL(R) XEON(R) PLATINUM 8573C · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 965.17µs | +44.9% |  | 654.26µs | 1.463ms | 20 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.117ms | +52.9% |  | 730.41µs | 1.578ms | 20 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 53.27µs | +58.2% |  | 33.67µs | 79.09µs | 20 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 590.27µs | +54.5% |  | 381.94µs | 846.98µs | 20 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 9.198ms | +60.6% |  | 5.726ms | 13.053ms | 20 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 260.47µs | +62.1% |  | 160.69µs | 385.26µs | 20 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.302ms | +58.5% |  | 1.453ms | 3.281ms | 20 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 9.062ms | +58.9% |  | 5.703ms | 13.004ms | 20 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 9.31µs | +46.2% |  | 6.19µs | 15.14µs | 20 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 76.28µs | +52.2% |  | 50.08µs | 126.55µs | 20 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 300.46µs | +55.0% |  | 193.82µs | 499.01µs | 20 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 67.04µs | +41.7% |  | 46.47µs | 76.13µs | 20 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 685.37µs | +63.1% |  | 402.17µs | 753.20µs | 20 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 9.79µs | +61.6% |  | 5.82µs | 11.01µs | 20 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 74.70µs | +49.9% |  | 47.09µs | 90.23µs | 20 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 636.78µs | +56.4% |  | 395.44µs | 1.273ms | 20 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.018ms | +44.0% |  | 3.484ms | 10.272ms | 20 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 19.481ms | +38.8% |  | 13.645ms | 41.163ms | 20 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 338.66µs | +36.1% |  | 241.09µs | 737.93µs | 20 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.124ms | +41.7% |  | 2.067ms | 6.315ms | 20 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 12.248ms | +34.6% |  | 8.865ms | 24.876ms | 20 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 53.66µs | +75.0% |  | 29.58µs | 58.39µs | 20 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 522.39µs | +61.1% |  | 323.51µs | 611.05µs | 20 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.854ms | +57.8% |  | 1.738ms | 3.397ms | 20 |
| external-message-conversion › core: external message tool results › 100 matches | 76.79µs | +85.0% |  | 41.28µs | 86.47µs | 20 |
| external-message-conversion › core: external message tool results › 1000 matches | 770.89µs | +83.2% |  | 416.72µs | 876.68µs | 20 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.202ms | +82.0% |  | 2.272ms | 4.731ms | 20 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 47.06µs | +82.5% |  | 24.40µs | 53.15µs | 20 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 435.73µs | +79.8% |  | 236.13µs | 510.27µs | 20 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.418ms | +77.4% |  | 1.358ms | 2.814ms | 20 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.24µs | +85.1% |  | 0.13µs | 0.27µs | 20 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.42µs | +70.1% |  | 0.24µs | 0.52µs | 20 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.23µs | +44.7% |  | 1.49µs | 2.53µs | 20 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.80µs | +84.6% |  | 0.42µs | 0.84µs | 20 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 3.97µs | +81.8% |  | 2.10µs | 4.82µs | 20 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 36.03µs | +81.2% |  | 18.98µs | 45.51µs | 20 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 153.85µs | +64.2% |  | 91.13µs | 168.10µs | 20 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 965.80µs | +51.1% |  | 635.33µs | 1.145ms | 20 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.365ms | +76.4% |  | 1.321ms | 2.874ms | 20 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.575ms | +66.6% |  | 1.520ms | 3.158ms | 20 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 13.904ms | +48.4% |  | 9.092ms | 18.024ms | 20 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 15.543ms | +49.1% |  | 10.423ms | 19.495ms | 20 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.731ms | +93.8% |  | 878.78µs | 1.786ms | 20 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.971ms | +104.7% |  | 1.427ms | 3.255ms | 20 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 8.442ms | +54.7% |  | 5.246ms | 9.793ms | 20 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.183ms | -0.5% |  | 1.124ms | 1.678ms | 20 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 2.017ms | +64.2% |  | 1.229ms | 2.017ms | 20 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 5.159ms | +92.4% |  | 2.555ms | 5.159ms | 20 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 260.79µs | +41.4% |  | 163.93µs | 305.15µs | 20 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.472ms | +57.5% |  | 1.458ms | 2.495ms | 20 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 308.835ms | +67.3% |  | 169.554ms | 354.777ms | 20 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.740ms | +41.1% |  | 7.613ms | 12.037ms | 20 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.19µs | +60.0% |  | 1.24µs | 4.55µs | 20 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 10.54µs | +63.0% |  | 6.08µs | 21.65µs | 20 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 41.86µs | +113.4% |  | 18.90µs | 90.02µs | 20 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 6.18µs | +86.8% |  | 3.21µs | 6.18µs | 20 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 21.94µs | +68.5% |  | 12.17µs | 26.88µs | 20 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 57.87µs | +84.9% |  | 29.99µs | 60.24µs | 20 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 540.19µs | +21.1% |  | 435.95µs | 689.42µs | 20 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.215ms | +65.5% |  | 3.482ms | 8.233ms | 20 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 31.356ms | +62.7% |  | 18.667ms | 45.681ms | 20 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 318.228ms | +20.0% |  | 256.386ms | 430.807ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 500.21µs | +70.5% |  | 269.12µs | 784.19µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 914.87µs | +88.3% |  | 447.81µs | 1.249ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.138ms | +55.2% |  | 2.276ms | 5.579ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 492.87µs | +80.2% |  | 266.49µs | 754.69µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.466ms | +138.5% |  | 987.37µs | 2.602ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 19.732ms | +39.2% |  | 14.171ms | 41.901ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 447.32µs | +55.4% |  | 257.90µs | 762.51µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.770ms | +99.8% |  | 796.46µs | 2.048ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 14.889ms | +59.7% |  | 9.325ms | 33.660ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 229.29µs | +88.0% |  | 120.14µs | 366.94µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 456.99µs | +79.1% |  | 236.65µs | 624.09µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.966ms | +51.5% |  | 1.684ms | 4.209ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 15.02µs | +56.5% |  | 9.23µs | 24.72µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 29.51µs | +48.2% |  | 18.80µs | 38.42µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 204.85µs | +59.6% |  | 128.33µs | 248.27µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 536.73µs | +76.6% |  | 286.94µs | 807.82µs | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.684ms | +139.3% |  | 679.64µs | 1.684ms | 20 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 11.722ms | +53.3% |  | 7.649ms | 27.010ms | 20 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 234.23µs | +59.0% |  | 145.07µs | 322.08µs | 20 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.103ms | +55.8% |  | 1.313ms | 2.708ms | 20 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.071ms | +61.6% |  | 653.73µs | 1.382ms | 20 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 264.90µs | +46.9% |  | 178.73µs | 520.95µs | 20 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.337ms | +48.3% |  | 1.576ms | 4.267ms | 20 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.202ms | +49.3% |  | 795.51µs | 2.173ms | 20 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 315.76µs | +81.6% |  | 173.91µs | 356.68µs | 20 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 24.103ms | +70.6% |  | 14.131ms | 27.242ms | 20 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 818.966ms | +111.8% |  | 369.530ms | 1171.337ms | 20 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 223.03µs | +51.5% |  | 140.00µs | 470.51µs | 20 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.712ms | +45.2% |  | 1.179ms | 3.593ms | 20 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 899.52µs | +49.3% |  | 602.33µs | 1.837ms | 20 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 4.588ms | +122.0% |  | 1.848ms | 4.588ms | 20 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 4.331ms | +110.6% |  | 1.784ms | 4.331ms | 20 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 4.017ms | +99.3% |  | 1.764ms | 4.046ms | 20 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 3.887ms | +85.3% |  | 2.020ms | 4.909ms | 20 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.956ms | +76.5% |  | 1.060ms | 2.201ms | 20 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.819ms | +68.2% |  | 1.665ms | 3.319ms | 20 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.804ms | +64.9% |  | 1.683ms | 3.276ms | 20 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 252.17µs | +61.4% |  | 148.91µs | 296.51µs | 20 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 115.92µs | +48.7% |  | 77.61µs | 141.34µs | 20 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.540ms | +70.6% |  | 856.60µs | 1.768ms | 20 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.670ms | +77.9% |  | 892.90µs | 1.958ms | 20 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.803ms | +82.5% |  | 924.99µs | 2.133ms | 20 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 75.21µs | +66.2% |  | 42.65µs | 83.30µs | 20 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.301ms | +69.6% |  | 755.99µs | 1.581ms | 20 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 69.67µs | +81.3% |  | 36.82µs | 73.49µs | 20 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.256ms | +68.9% |  | 741.79µs | 1.546ms | 20 |

informational; points come from different runners of the same class, so read trends, not single deltas.

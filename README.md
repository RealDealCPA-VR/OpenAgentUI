## aui-perf nightly record

_30 points · 2026-10-08T04:44:32.688Z to 2026-11-06T04:30:28.487Z · latest runner: AMD EPYC 9V74 80-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 944.62µs | +47.1% |  | 635.00µs | 1.463ms | 30 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.072ms | +46.5% |  | 715.47µs | 1.578ms | 30 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 46.36µs | +40.3% |  | 32.96µs | 79.09µs | 30 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 531.50µs | +46.5% |  | 362.82µs | 846.98µs | 30 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 8.291ms | +45.0% |  | 5.720ms | 13.053ms | 30 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 244.07µs | +48.8% |  | 157.97µs | 385.26µs | 30 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.094ms | +50.5% |  | 1.391ms | 3.281ms | 30 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 8.250ms | +43.0% |  | 5.591ms | 13.004ms | 30 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.70µs | +46.9% |  | 5.92µs | 15.14µs | 30 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 72.49µs | +56.0% |  | 46.46µs | 126.55µs | 30 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 285.94µs | +49.4% |  | 183.90µs | 499.01µs | 30 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 58.73µs | +23.9% |  | 46.47µs | 76.17µs | 30 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 550.99µs | +36.0% |  | 402.17µs | 753.20µs | 30 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 7.32µs | +32.1% |  | 5.54µs | 11.05µs | 30 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 62.11µs | +35.5% |  | 45.85µs | 90.23µs | 30 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 585.92µs | +51.9% |  | 385.78µs | 1.273ms | 30 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.068ms | +47.7% |  | 3.432ms | 10.272ms | 30 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 20.332ms | +50.5% |  | 13.513ms | 41.163ms | 30 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 325.63µs | +42.7% |  | 228.27µs | 737.93µs | 30 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.968ms | +47.2% |  | 2.016ms | 6.315ms | 30 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 12.099ms | +50.5% |  | 8.037ms | 24.876ms | 30 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 44.25µs | +47.0% |  | 29.58µs | 58.85µs | 30 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 459.74µs | +44.6% |  | 317.99µs | 619.94µs | 30 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.512ms | +42.5% |  | 1.738ms | 3.397ms | 30 |
| external-message-conversion › core: external message tool results › 100 matches | 62.65µs | +54.6% |  | 40.51µs | 86.47µs | 30 |
| external-message-conversion › core: external message tool results › 1000 matches | 643.10µs | +53.4% |  | 416.72µs | 879.16µs | 30 |
| external-message-conversion › core: external message tool results › 5000 matches | 3.482ms | +53.7% |  | 2.265ms | 4.731ms | 30 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 37.65µs | +56.8% |  | 24.02µs | 53.39µs | 30 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 357.12µs | +55.9% |  | 229.02µs | 516.13µs | 30 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.093ms | +56.4% |  | 1.338ms | 2.844ms | 30 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.18µs | +44.0% |  | 0.13µs | 0.27µs | 30 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.33µs | +40.3% |  | 0.24µs | 0.52µs | 30 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.12µs | +49.7% |  | 1.42µs | 2.53µs | 30 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.55µs | +31.5% |  | 0.42µs | 0.84µs | 30 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 3.14µs | +54.7% |  | 2.03µs | 4.82µs | 30 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 28.75µs | +59.8% |  | 18.00µs | 45.51µs | 30 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 123.56µs | +33.8% |  | 91.13µs | 168.10µs | 30 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 862.64µs | +35.1% |  | 635.33µs | 1.175ms | 30 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.033ms | +61.8% |  | 1.257ms | 2.874ms | 30 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.158ms | +49.8% |  | 1.441ms | 3.158ms | 30 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 13.894ms | +47.9% |  | 9.092ms | 18.296ms | 30 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 14.865ms | +46.1% |  | 10.175ms | 19.818ms | 30 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.026ms | +40.2% |  | 732.15µs | 1.786ms | 30 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.073ms | +48.9% |  | 1.363ms | 3.255ms | 30 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 7.056ms | +34.6% |  | 5.234ms | 10.152ms | 30 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.482ms | +26.8% |  | 1.124ms | 1.678ms | 30 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.397ms | +19.7% |  | 1.167ms | 2.017ms | 30 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.718ms | +51.3% |  | 2.493ms | 5.272ms | 30 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 228.77µs | +39.1% |  | 163.93µs | 305.15µs | 30 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.011ms | +37.8% |  | 1.458ms | 2.495ms | 30 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 240.260ms | +39.9% |  | 168.933ms | 354.777ms | 30 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.035ms | +36.6% |  | 7.346ms | 12.109ms | 30 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.85µs | +46.1% |  | 1.24µs | 4.55µs | 30 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.32µs | +50.5% |  | 6.08µs | 21.65µs | 30 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 32.23µs | +78.2% |  | 18.08µs | 90.02µs | 30 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.11µs | +33.2% |  | 3.08µs | 6.18µs | 30 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 16.54µs | +33.5% |  | 12.17µs | 26.88µs | 30 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 39.58µs | +33.8% |  | 29.59µs | 60.24µs | 30 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 604.35µs | +35.0% |  | 435.95µs | 699.44µs | 30 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 4.276ms | +55.7% |  | 2.746ms | 8.233ms | 30 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 22.958ms | +30.2% |  | 17.633ms | 45.681ms | 30 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 296.086ms | +24.4% |  | 237.981ms | 430.807ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 439.66µs | +71.4% |  | 256.48µs | 784.19µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 737.24µs | +65.6% |  | 445.26µs | 1.249ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.977ms | +32.2% |  | 2.161ms | 5.579ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 493.73µs | +93.4% |  | 255.34µs | 754.69µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.642ms | +64.6% |  | 987.37µs | 2.602ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 20.848ms | +40.3% |  | 13.190ms | 41.901ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 438.37µs | +90.6% |  | 229.94µs | 762.51µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.281ms | +78.3% |  | 718.25µs | 2.048ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 14.953ms | +57.9% |  | 9.325ms | 33.660ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 206.01µs | +86.7% |  | 110.32µs | 366.94µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 387.85µs | +76.3% |  | 219.94µs | 624.09µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.297ms | +52.3% |  | 1.508ms | 4.209ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 12.93µs | +47.0% |  | 8.35µs | 25.23µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 27.99µs | +56.9% |  | 17.84µs | 42.45µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 205.89µs | +67.5% |  | 122.88µs | 275.65µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 466.10µs | +83.5% |  | 253.94µs | 807.82µs | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.113ms | +74.2% |  | 639.06µs | 1.684ms | 30 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 14.873ms | +62.9% |  | 7.649ms | 27.010ms | 30 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 207.09µs | +47.4% |  | 140.47µs | 322.08µs | 30 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.827ms | +44.6% |  | 1.263ms | 2.708ms | 30 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 921.78µs | +44.3% |  | 638.71µs | 1.382ms | 30 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 253.66µs | +43.7% |  | 176.39µs | 520.95µs | 30 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.207ms | +44.4% |  | 1.528ms | 4.267ms | 30 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.111ms | +40.5% |  | 790.67µs | 2.173ms | 30 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 242.25µs | +45.7% |  | 166.26µs | 356.68µs | 30 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 20.762ms | +50.0% |  | 13.845ms | 27.242ms | 30 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 459.581ms | +23.7% |  | 369.530ms | 1177.339ms | 30 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 206.61µs | +36.3% |  | 140.00µs | 470.51µs | 30 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.648ms | +43.4% |  | 1.149ms | 3.593ms | 30 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 855.27µs | +41.0% |  | 602.33µs | 1.837ms | 30 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.774ms | +10.8% |  | 1.848ms | 4.588ms | 30 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.767ms | +14.0% |  | 1.784ms | 4.331ms | 30 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.706ms | +14.0% |  | 1.764ms | 4.046ms | 30 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.831ms | +51.4% |  | 1.871ms | 4.909ms | 30 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.566ms | +45.7% |  | 1.060ms | 2.201ms | 30 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.478ms | +50.2% |  | 1.650ms | 3.476ms | 30 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.485ms | +50.6% |  | 1.650ms | 3.367ms | 30 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 189.13µs | +31.8% |  | 143.50µs | 296.51µs | 30 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 105.26µs | +39.5% |  | 75.47µs | 142.80µs | 30 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.297ms | +49.3% |  | 856.60µs | 1.768ms | 30 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.429ms | +65.7% |  | 862.32µs | 2.022ms | 30 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.587ms | +71.1% |  | 924.99µs | 2.172ms | 30 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 67.23µs | +61.0% |  | 41.75µs | 88.29µs | 30 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.220ms | +71.2% |  | 712.69µs | 1.613ms | 30 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 57.53µs | +57.4% |  | 36.56µs | 79.48µs | 30 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.177ms | +56.3% |  | 741.79µs | 1.546ms | 30 |

informational; points come from different runners of the same class, so read trends, not single deltas.

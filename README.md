## aui-perf nightly record

_29 points · 2026-10-08T04:44:32.688Z to 2026-11-05T04:31:24.500Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.098ms | +73.0% |  | 635.00µs | 1.463ms | 29 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.250ms | +74.7% |  | 715.47µs | 1.578ms | 29 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.30µs | +89.0% |  | 32.96µs | 79.09µs | 29 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 658.92µs | +78.8% |  | 362.82µs | 846.98µs | 29 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.139ms | +75.3% |  | 5.720ms | 13.053ms | 29 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 309.80µs | +96.1% |  | 157.97µs | 385.26µs | 29 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.534ms | +77.2% |  | 1.391ms | 3.281ms | 29 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.072ms | +80.1% |  | 5.591ms | 13.004ms | 29 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.14µs | +70.6% |  | 5.92µs | 15.14µs | 29 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 89.36µs | +87.0% |  | 46.46µs | 126.55µs | 29 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 352.15µs | +91.5% |  | 183.90µs | 499.01µs | 29 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.75µs | +55.1% |  | 46.47µs | 76.17µs | 29 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 728.20µs | +77.3% |  | 402.17µs | 753.20µs | 29 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.45µs | +75.4% |  | 5.54µs | 11.05µs | 29 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 88.45µs | +77.8% |  | 45.85µs | 90.23µs | 29 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 786.92µs | +97.1% |  | 385.78µs | 1.273ms | 29 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.120ms | +73.7% |  | 3.432ms | 10.272ms | 29 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.589ms | +80.3% |  | 13.513ms | 41.163ms | 29 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 411.26µs | +59.8% |  | 228.27µs | 737.93µs | 29 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.652ms | +73.3% |  | 2.016ms | 6.315ms | 29 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.933ms | +77.3% |  | 8.037ms | 24.876ms | 29 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 58.31µs | +88.0% |  | 29.58µs | 58.85µs | 29 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 619.94µs | +82.0% |  | 317.99µs | 619.94µs | 29 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.351ms | +91.0% |  | 1.738ms | 3.397ms | 29 |
| external-message-conversion › core: external message tool results › 100 matches | 85.66µs | +100.3% |  | 40.51µs | 86.47µs | 29 |
| external-message-conversion › core: external message tool results › 1000 matches | 873.79µs | +103.0% |  | 416.72µs | 879.16µs | 29 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.700ms | +101.8% |  | 2.265ms | 4.731ms | 29 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.69µs | +103.9% |  | 24.02µs | 53.39µs | 29 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 510.23µs | +109.7% |  | 229.02µs | 516.13µs | 29 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.795ms | +98.0% |  | 1.338ms | 2.844ms | 29 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | +80.5% |  | 0.13µs | 0.27µs | 29 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | +83.7% |  | 0.24µs | 0.52µs | 29 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.48µs | +74.4% |  | 1.42µs | 2.53µs | 29 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.73µs | +70.8% |  | 0.42µs | 0.84µs | 29 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.45µs | +90.8% |  | 2.03µs | 4.82µs | 29 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 41.28µs | +95.4% |  | 18.00µs | 45.51µs | 29 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 159.77µs | +69.6% |  | 91.13µs | 168.10µs | 29 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.160ms | +73.4% |  | 635.33µs | 1.175ms | 29 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.668ms | +107.3% |  | 1.257ms | 2.874ms | 29 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.999ms | +94.9% |  | 1.441ms | 3.158ms | 29 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.721ms | +86.6% |  | 9.092ms | 18.296ms | 29 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.935ms | +77.2% |  | 10.175ms | 19.818ms | 29 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.557ms | +81.1% |  | 732.15µs | 1.786ms | 29 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.994ms | +119.7% |  | 1.363ms | 3.255ms | 29 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.496ms | +81.4% |  | 5.234ms | 10.152ms | 29 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.214ms | +3.9% |  | 1.124ms | 1.678ms | 29 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.988ms | +59.0% |  | 1.167ms | 2.017ms | 29 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 5.218ms | +109.3% |  | 2.493ms | 5.272ms | 29 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 275.08µs | +62.5% |  | 163.93µs | 305.15µs | 29 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.176ms | +46.0% |  | 1.458ms | 2.495ms | 29 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 312.007ms | +84.7% |  | 168.933ms | 354.777ms | 29 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.950ms | +47.3% |  | 7.346ms | 12.109ms | 29 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.34µs | +82.2% |  | 1.24µs | 4.55µs | 29 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.19µs | +47.2% |  | 6.08µs | 21.65µs | 29 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 37.32µs | +103.3% |  | 18.08µs | 90.02µs | 29 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.88µs | +51.2% |  | 3.08µs | 6.18µs | 29 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 19.37µs | +47.8% |  | 12.17µs | 26.88µs | 29 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.32µs | +57.9% |  | 29.59µs | 60.24µs | 29 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 688.32µs | +45.9% |  | 435.95µs | 699.44µs | 29 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.336ms | +58.6% |  | 2.746ms | 8.233ms | 29 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 37.272ms | +97.8% |  | 17.633ms | 45.681ms | 29 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 390.118ms | +54.9% |  | 237.981ms | 430.807ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 719.89µs | +160.5% |  | 256.48µs | 784.19µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.070ms | +108.6% |  | 445.26µs | 1.249ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.194ms | +94.1% |  | 2.161ms | 5.579ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 683.79µs | +165.5% |  | 255.34µs | 754.69µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.210ms | +117.6% |  | 987.37µs | 2.602ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 26.028ms | +97.3% |  | 13.190ms | 41.901ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 699.19µs | +146.8% |  | 229.94µs | 762.51µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.735ms | +123.4% |  | 718.25µs | 2.048ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 16.683ms | +64.0% |  | 9.325ms | 33.660ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 331.23µs | +151.5% |  | 110.32µs | 366.94µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 567.44µs | +135.0% |  | 219.94µs | 624.09µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.573ms | +125.8% |  | 1.508ms | 4.209ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.96µs | +198.9% |  | 8.35µs | 25.23µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 42.11µs | +126.5% |  | 17.84µs | 42.45µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 266.89µs | +110.1% |  | 122.88µs | 275.65µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 712.59µs | +108.6% |  | 253.94µs | 807.82µs | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.431ms | +102.9% |  | 639.06µs | 1.684ms | 29 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 15.282ms | +72.6% |  | 7.649ms | 27.010ms | 29 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 261.98µs | +82.0% |  | 140.47µs | 322.08µs | 29 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.275ms | +80.0% |  | 1.263ms | 2.708ms | 29 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.168ms | +72.6% |  | 638.71µs | 1.382ms | 29 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 314.38µs | +78.2% |  | 176.39µs | 520.95µs | 29 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.665ms | +69.6% |  | 1.528ms | 4.267ms | 29 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.366ms | +71.2% |  | 790.67µs | 2.173ms | 29 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 336.08µs | +101.9% |  | 166.26µs | 356.68µs | 29 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.344ms | +83.1% |  | 13.845ms | 27.242ms | 29 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 662.626ms | +74.6% |  | 369.530ms | 1177.339ms | 29 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 265.24µs | +83.2% |  | 140.00µs | 470.51µs | 29 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.040ms | +71.7% |  | 1.149ms | 3.593ms | 29 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.045ms | +72.9% |  | 602.33µs | 1.837ms | 29 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.588ms | +91.6% |  | 1.848ms | 4.588ms | 29 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.581ms | +87.5% |  | 1.784ms | 4.331ms | 29 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.479ms | +88.0% |  | 1.764ms | 4.046ms | 29 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.144ms | +91.2% |  | 1.871ms | 4.909ms | 29 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.075ms | +86.1% |  | 1.060ms | 2.201ms | 29 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.476ms | +101.4% |  | 1.650ms | 3.476ms | 29 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.366ms | +90.4% |  | 1.650ms | 3.367ms | 29 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 238.22µs | +44.9% |  | 143.50µs | 296.51µs | 29 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 140.96µs | +73.8% |  | 75.47µs | 142.80µs | 29 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.755ms | +95.3% |  | 856.60µs | 1.768ms | 29 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.864ms | +99.6% |  | 862.32µs | 2.022ms | 29 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.119ms | +111.6% |  | 924.99µs | 2.172ms | 29 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 88.29µs | +99.8% |  | 41.75µs | 88.29µs | 29 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.469ms | +91.0% |  | 712.69µs | 1.613ms | 29 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 79.48µs | +105.1% |  | 36.56µs | 79.48µs | 29 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.456ms | +94.0% |  | 741.79µs | 1.546ms | 29 |

informational; points come from different runners of the same class, so read trends, not single deltas.

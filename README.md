## aui-perf nightly record

_31 points · 2026-10-08T04:44:32.688Z to 2026-11-07T04:30:40.799Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.112ms | +1.0% |  | 635.00µs | 1.463ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.265ms | -0.1% |  | 715.47µs | 1.578ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 61.31µs | -0.7% |  | 32.96µs | 79.09µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 659.41µs | +0.4% |  | 362.82µs | 846.98µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.210ms | +0.9% |  | 5.720ms | 13.053ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 308.02µs | -0.9% |  | 157.97µs | 385.26µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.544ms | +0.1% |  | 1.391ms | 3.281ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.138ms | +0.2% |  | 5.591ms | 13.004ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.22µs | +0.4% |  | 5.92µs | 15.14µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 90.77µs | +2.2% |  | 46.46µs | 126.55µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 352.71µs | +0.3% |  | 183.90µs | 499.01µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 74.06µs | +0.1% |  | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 721.16µs | +0.1% |  | 402.17µs | 753.20µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.15µs | -0.5% |  | 5.54µs | 11.05µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 86.97µs | -0.6% |  | 45.85µs | 90.23µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 781.05µs | -1.4% |  | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.084ms | -1.1% |  | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.181ms | -1.0% |  | 13.513ms | 41.163ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 421.19µs | +3.6% |  | 228.27µs | 737.93µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.651ms | +0.9% |  | 2.016ms | 6.315ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.453ms | -2.0% |  | 8.037ms | 24.876ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.50µs | -0.9% |  | 29.58µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 593.44µs | -0.7% |  | 317.99µs | 619.94µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.276ms | -1.5% |  | 1.738ms | 3.397ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 85.19µs | +0.8% |  | 40.51µs | 86.47µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 864.52µs | +0.4% |  | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.642ms | -0.6% |  | 2.265ms | 4.731ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.92µs | -0.9% |  | 24.02µs | 53.39µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 508.80µs | -1.4% |  | 229.02µs | 516.13µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.767ms | -1.6% |  | 1.338ms | 2.844ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | +2.0% |  | 0.13µs | 0.27µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | -0.2% |  | 0.24µs | 0.52µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.46µs | -0.7% |  | 1.42µs | 2.53µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +0.2% |  | 0.42µs | 0.84µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.52µs | -1.7% |  | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.16µs | -1.5% |  | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 161.51µs | -2.5% |  | 91.13µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.074ms | -8.6% |  | 635.33µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.641ms | +0.5% |  | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.914ms | -0.8% |  | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.734ms | +0.5% |  | 9.092ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.669ms | -0.2% |  | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.558ms | +5.0% |  | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.088ms | +1.0% |  | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.329ms | -3.1% |  | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.215ms | -1.5% |  | 1.124ms | 1.678ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 2.014ms | +3.2% |  | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 5.106ms | -3.2% |  | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 279.20µs | +2.2% |  | 163.93µs | 305.15µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.228ms | +2.4% |  | 1.458ms | 2.495ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 312.301ms | -1.5% |  | 168.933ms | 354.777ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 11.706ms | +7.6% |  | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.35µs | +1.2% |  | 1.24µs | 4.55µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.29µs | +0.7% |  | 6.08µs | 21.65µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 37.28µs | +2.6% |  | 18.08µs | 90.02µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.88µs | +0.1% |  | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.89µs | -1.3% |  | 12.17µs | 26.88µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.16µs | +0.0% |  | 29.59µs | 60.24µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 694.25µs | +0.0% |  | 435.95µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.552ms | +2.0% |  | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 35.824ms | +1.8% |  | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 383.063ms | +0.1% |  | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 731.73µs | +5.4% |  | 256.48µs | 784.19µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.054ms | +5.4% |  | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.111ms | +0.2% |  | 2.161ms | 5.579ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 691.47µs | +4.2% |  | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.201ms | +4.2% |  | 987.37µs | 2.602ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 26.996ms | -1.3% |  | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 713.84µs | +2.5% |  | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.742ms | +5.2% |  | 718.25µs | 2.048ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 26.699ms | +42.3% |  | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 336.63µs | -0.9% |  | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 546.91µs | +2.3% |  | 219.94µs | 624.09µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.535ms | -3.9% |  | 1.508ms | 4.209ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.22µs | -1.7% |  | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 42.95µs | +1.2% |  | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 264.70µs | +0.2% |  | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 746.54µs | +6.6% |  | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.423ms | +0.4% |  | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 18.282ms | +19.5% |  | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 265.99µs | +0.3% |  | 140.47µs | 322.08µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.289ms | +0.6% |  | 1.263ms | 2.708ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.165ms | +0.0% |  | 638.71µs | 1.382ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 313.37µs | -0.3% |  | 176.39µs | 520.95µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.609ms | -0.5% |  | 1.528ms | 4.267ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.340ms | -1.0% |  | 790.67µs | 2.173ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 331.37µs | +0.4% |  | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.943ms | +0.4% |  | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 671.570ms | -43.0% |  | 369.530ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 262.03µs | +0.1% |  | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.997ms | +0.5% |  | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.051ms | +1.6% |  | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.416ms | -5.7% |  | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.452ms | -4.2% |  | 1.784ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.352ms | -4.3% |  | 1.764ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.117ms | +0.0% |  | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.063ms | -2.9% |  | 1.060ms | 2.201ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.239ms | -3.1% |  | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.232ms | -4.0% |  | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 225.78µs | -6.4% |  | 143.50µs | 296.51µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 139.84µs | -2.1% |  | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.700ms | -2.4% |  | 856.60µs | 1.768ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.848ms | +0.7% |  | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.088ms | +3.0% |  | 924.99µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 87.57µs | +2.1% |  | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.492ms | +1.8% |  | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 76.96µs | -0.7% |  | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.463ms | +0.8% |  | 741.79µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.

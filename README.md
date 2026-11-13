## aui-perf nightly record

_37 points · 2026-10-08T04:44:32.688Z to 2026-11-13T04:31:10.760Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.3_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.110ms | +17.5% | +33.6% ⚠︎ | 635.00µs | 1.433ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.286ms | +19.9% | +39.3% ⚠︎ | 715.47µs | 1.550ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 63.39µs | +36.7% | +44.1% ⚠︎ | 32.96µs | 78.94µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 670.89µs | +26.2% | +41.2% ⚠︎ | 362.82µs | 810.15µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.417ms | +25.6% | +38.3% ⚠︎ | 5.720ms | 12.531ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 315.23µs | +29.2% | +48.6% ⚠︎ | 157.97µs | 383.99µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.601ms | +24.2% | +37.4% ⚠︎ | 1.391ms | 3.159ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.223ms | +23.9% | +35.7% ⚠︎ | 5.591ms | 12.362ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.11µs | +16.2% | +17.8% ⚠︎ | 5.92µs | 14.54µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 89.62µs | +23.6% | +32.9% ⚠︎ | 46.46µs | 122.92µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 354.78µs | +24.1% | +34.2% ⚠︎ | 183.90µs | 485.35µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 76.06µs | +29.5% | +60.3% ⚠︎ | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 742.37µs | +34.7% | +73.3% ⚠︎ | 405.26µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 15.04µs | +105.5% | +148.5% ⚠︎ | 5.54µs | 15.04µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 122.99µs | +98.0% | +157.5% ⚠︎ | 45.85µs | 122.99µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 785.54µs | +34.1% | +13.0% ⚠︎ | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.164ms | +21.6% | +3.9% | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.731ms | +21.6% | -1.2% | 13.513ms | 40.641ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 418.27µs | +28.4% | -3.4% | 228.27µs | 717.50µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.710ms | +25.0% | -3.5% | 2.016ms | 6.156ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 15.127ms | +25.0% | -4.2% | 8.037ms | 24.634ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 55.59µs | +25.6% | +76.2% ⚠︎ | 30.11µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 600.44µs | +30.6% | +75.7% ⚠︎ | 317.99µs | 645.76µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.265ms | +30.0% | +76.7% ⚠︎ | 1.755ms | 3.498ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 84.44µs | +34.8% | +93.7% ⚠︎ | 40.51µs | 86.78µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 878.64µs | +36.6% | +100.5% ⚠︎ | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.728ms | +35.8% | +96.5% ⚠︎ | 2.265ms | 4.728ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.70µs | +40.0% | +107.8% ⚠︎ | 24.02µs | 54.38µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 509.29µs | +42.6% | +107.8% ⚠︎ | 229.02µs | 519.28µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.778ms | +32.8% | +99.3% ⚠︎ | 1.338ms | 2.871ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.24µs | +32.1% | +85.3% ⚠︎ | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs | +33.6% | +77.6% ⚠︎ | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.48µs | +16.8% | +62.5% ⚠︎ | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.75µs | +36.2% | +64.3% ⚠︎ | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.54µs | +44.6% | +104.3% ⚠︎ | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.64µs | +48.3% | +119.6% ⚠︎ | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 160.74µs | +30.1% | +64.6% ⚠︎ | 92.35µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.119ms | +29.7% | +63.9% ⚠︎ | 638.75µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.672ms | +31.5% | +101.0% ⚠︎ | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.943ms | +36.3% | +87.1% ⚠︎ | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.599ms | +26.7% | +83.8% ⚠︎ | 9.369ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.241ms | +29.4% | +80.3% ⚠︎ | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.535ms | +49.6% | +68.2% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.077ms | +48.5% | +108.8% ⚠︎ | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.373ms | +32.8% | +62.5% ⚠︎ | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.212ms | -18.2% | -1.3% | 1.142ms | 1.482ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.884ms | +34.8% | +46.1% ⚠︎ | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.830ms | +2.4% | +43.8% ⚠︎ | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 294.23µs | +28.6% | +61.9% ⚠︎ | 164.45µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.436ms | +21.1% | +51.9% ⚠︎ | 1.459ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 316.711ms | +31.8% | +73.3% ⚠︎ | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 11.620ms | +15.8% | +46.1% ⚠︎ | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.31µs | +25.0% | +74.5% ⚠︎ | 1.27µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.50µs | +1.9% | +44.6% ⚠︎ | 6.19µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 38.22µs | +18.6% | +97.2% ⚠︎ | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.90µs | +19.4% | +46.2% ⚠︎ | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 19.08µs | +15.4% | +45.2% ⚠︎ | 12.39µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.12µs | +19.0% | +49.6% ⚠︎ | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 690.15µs | +14.2% | +55.5% ⚠︎ | 446.13µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.853ms | +60.3% | +64.0% ⚠︎ | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 39.849ms | +73.6% | +86.1% ⚠︎ | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 398.818ms | +34.7% | +38.1% ⚠︎ | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 734.43µs | +67.0% | +172.9% ⚠︎ | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.085ms | +47.2% | +118.6% ⚠︎ | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.212ms | +41.5% | +60.0% ⚠︎ | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 701.40µs | +42.1% | +119.9% ⚠︎ | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.160ms | +31.5% | +103.7% ⚠︎ | 984.70µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 35.329ms | +69.5% | +93.2% ⚠︎ | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 686.54µs | +56.6% | +166.2% ⚠︎ | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.704ms | +33.1% | +97.2% ⚠︎ | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 27.308ms | +82.6% | -7.6% | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 335.45µs | +62.8% | +148.1% ⚠︎ | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 571.63µs | +47.4% | +135.6% ⚠︎ | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.159ms | +37.5% | +72.7% ⚠︎ | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.60µs | +90.3% | +161.1% ⚠︎ | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 38.91µs | +39.0% | +101.1% ⚠︎ | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 239.53µs | +16.3% | +79.5% ⚠︎ | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 699.38µs | +50.0% | +143.7% ⚠︎ | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.456ms | +30.8% | +110.4% ⚠︎ | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 25.989ms | +74.7% | +38.6% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 263.28µs | +27.1% | +47.1% ⚠︎ | 140.47µs | 312.26µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.298ms | +25.8% | +47.3% ⚠︎ | 1.263ms | 2.642ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.164ms | +26.2% | +45.6% ⚠︎ | 638.71µs | 1.347ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 317.69µs | +25.2% | +8.0% | 176.39µs | 517.74µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.661ms | +20.6% | +6.3% | 1.528ms | 4.225ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.375ms | +23.8% | +6.7% | 790.67µs | 2.160ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 355.20µs | +46.6% | +101.0% ⚠︎ | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.631ms | +28.3% | +78.9% ⚠︎ | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 660.929ms | +43.8% | +66.1% ⚠︎ | 371.567ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 270.93µs | +31.1% | +7.8% | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.074ms | +25.9% | +0.1% | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.056ms | +23.4% | -6.2% | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.423ms | +23.4% | +80.3% ⚠︎ | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.402ms | +23.0% | +83.7% ⚠︎ | 1.907ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.316ms | +22.6% | +80.5% ⚠︎ | 1.802ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.056ms | +43.2% | +87.1% ⚠︎ | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.027ms | +29.5% | +80.0% ⚠︎ | 1.074ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.222ms | +30.0% | +86.0% ⚠︎ | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.182ms | +28.0% | +84.9% ⚠︎ | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 234.66µs | +24.1% | +51.6% ⚠︎ | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 140.57µs | +33.5% | +75.9% ⚠︎ | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.675ms | +29.2% | +83.8% ⚠︎ | 868.75µs | 1.782ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.797ms | +25.7% | +91.1% ⚠︎ | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.054ms | +29.5% | +97.6% ⚠︎ | 927.24µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 79.07µs | +17.6% | +72.4% ⚠︎ | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.496ms | +22.6% | +91.9% ⚠︎ | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 66.03µs | +14.8% | +66.1% ⚠︎ | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.451ms | +23.3% | +89.3% ⚠︎ | 743.36µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.

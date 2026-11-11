## aui-perf nightly record

_35 points · 2026-10-08T04:44:32.688Z to 2026-11-11T04:30:56.485Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.106ms | -2.8% | +32.2% ⚠︎ | 635.00µs | 1.433ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.260ms | -2.8% | +38.6% ⚠︎ | 715.47µs | 1.550ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.61µs | -4.9% | +35.2% ⚠︎ | 32.96µs | 78.94µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 665.23µs | -8.8% | +36.9% ⚠︎ | 362.82µs | 810.15µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.214ms | -9.5% | +35.1% ⚠︎ | 5.720ms | 12.531ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 312.06µs | -2.3% | +45.1% ⚠︎ | 157.97µs | 383.99µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.560ms | -8.6% | +39.0% ⚠︎ | 1.391ms | 3.159ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.148ms | -8.8% | +35.7% ⚠︎ | 5.591ms | 12.362ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.13µs | -8.3% | +17.2% ⚠︎ | 5.92µs | 14.54µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.87µs | -3.8% | +31.0% ⚠︎ | 46.46µs | 122.92µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 353.45µs | -5.4% | +35.3% ⚠︎ | 183.90µs | 485.35µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.51µs | -2.8% | +57.7% ⚠︎ | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 719.07µs | -3.8% | +68.5% ⚠︎ | 405.26µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.38µs | -6.1% | +68.7% ⚠︎ | 5.54µs | 11.05µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 86.79µs | -2.5% | +69.6% ⚠︎ | 45.85µs | 90.23µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 780.04µs | +2.8% | +9.4% | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.087ms | +2.7% | -2.0% | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.153ms | +2.8% | -2.7% | 13.513ms | 40.641ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 413.59µs | -7.9% | -5.3% | 228.27µs | 717.50µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.560ms | -6.8% | -12.4% ⚠︎ | 2.016ms | 6.156ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.081ms | -7.7% | -14.1% ⚠︎ | 8.037ms | 24.634ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 58.17µs | -1.2% | +84.7% ⚠︎ | 30.11µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 645.76µs | +5.6% | +91.5% ⚠︎ | 317.99µs | 645.76µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.498ms | +3.1% | +92.9% ⚠︎ | 1.755ms | 3.498ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 86.78µs | +5.3% | +96.0% ⚠︎ | 40.51µs | 86.78µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 874.86µs | +3.6% | +99.2% ⚠︎ | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.695ms | +0.2% | +90.5% ⚠︎ | 2.265ms | 4.713ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 54.38µs | +6.1% | +106.7% ⚠︎ | 24.02µs | 54.38µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 519.28µs | +7.5% | +106.6% ⚠︎ | 229.02µs | 519.28µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.871ms | +3.9% | +100.2% ⚠︎ | 1.338ms | 2.871ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | -4.3% | +81.0% ⚠︎ | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs | -8.4% | +76.9% ⚠︎ | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.48µs | -0.4% | +62.0% ⚠︎ | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +0.2% | +65.4% ⚠︎ | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.54µs | +0.7% | +104.0% ⚠︎ | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.05µs | +5.1% | +110.5% ⚠︎ | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 161.11µs | +1.4% | +64.9% ⚠︎ | 92.35µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.045ms | +2.0% | +53.3% ⚠︎ | 638.75µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.655ms | -0.8% | +88.3% ⚠︎ | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.929ms | +0.4% | +90.0% ⚠︎ | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.384ms | -0.4% | +80.4% ⚠︎ | 9.369ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.947ms | +1.9% | +75.8% ⚠︎ | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.491ms | -4.3% | +54.2% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.979ms | -4.2% | +88.9% ⚠︎ | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.277ms | -6.2% | +68.2% ⚠︎ | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.229ms | +1.9% | -18.4% ⚠︎ | 1.142ms | 1.482ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.925ms | -2.0% | +40.1% ⚠︎ | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.746ms | +9.4% | +31.7% ⚠︎ | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 276.71µs | -9.2% | +53.8% ⚠︎ | 164.45µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.224ms | -8.0% | +39.6% ⚠︎ | 1.459ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 311.864ms | -9.8% | +75.0% ⚠︎ | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.792ms | -10.9% | +35.5% ⚠︎ | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.33µs | -3.9% | +77.5% ⚠︎ | 1.27µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.31µs | -15.4% | +46.8% ⚠︎ | 6.19µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 35.70µs | -25.4% | +69.8% ⚠︎ | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.91µs | -18.5% | +47.0% ⚠︎ | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.44µs | -27.9% | +35.4% ⚠︎ | 12.39µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.16µs | -18.4% | +47.9% ⚠︎ | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 685.76µs | +13.9% | +51.1% ⚠︎ | 441.50µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.518ms | +12.9% | +63.9% ⚠︎ | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 37.444ms | +14.7% | +77.0% ⚠︎ | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 385.376ms | +12.2% | +33.2% ⚠︎ | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 713.65µs | +3.4% | +134.8% ⚠︎ | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.002ms | -13.6% | +113.3% ⚠︎ | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.113ms | -13.8% | +65.7% ⚠︎ | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 681.04µs | -1.7% | +133.3% ⚠︎ | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.234ms | -3.8% | +92.7% ⚠︎ | 984.70µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 23.937ms | -35.4% | -30.8% ⚠︎ | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 705.75µs | +7.6% | +139.9% ⚠︎ | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.706ms | -7.2% | +91.6% ⚠︎ | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 16.351ms | -43.8% | -38.8% ⚠︎ | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 335.01µs | +1.7% | +161.8% ⚠︎ | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 537.71µs | -3.9% | +117.0% ⚠︎ | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.734ms | +3.5% | +118.2% ⚠︎ | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.42µs | +22.5% | +152.2% ⚠︎ | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 42.62µs | +24.8% | +112.9% ⚠︎ | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 260.63µs | +12.3% | +94.9% ⚠︎ | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 719.02µs | +12.3% | +116.2% ⚠︎ | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.406ms | -11.8% | +78.1% ⚠︎ | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 14.834ms | -37.2% | -33.0% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 262.21µs | -5.5% | +44.2% ⚠︎ | 140.47µs | 312.26µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.294ms | -6.2% | +43.7% ⚠︎ | 1.263ms | 2.642ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.153ms | -7.4% | +41.1% ⚠︎ | 638.71µs | 1.347ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 306.07µs | -6.2% | +3.5% | 176.39µs | 517.74µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.625ms | -3.9% | +0.6% | 1.528ms | 4.225ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.329ms | -5.7% | -0.2% | 790.67µs | 2.160ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 340.40µs | +4.8% | +85.8% ⚠︎ | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 25.773ms | +0.9% | +71.9% ⚠︎ | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 673.647ms | -13.5% | +65.6% ⚠︎ | 371.567ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 264.29µs | -1.9% | -0.8% | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.968ms | -6.3% | -9.5% | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.018ms | -5.9% | -8.6% | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.457ms | -7.1% | +84.2% ⚠︎ | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.432ms | -7.4% | +82.4% ⚠︎ | 1.852ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.347ms | -7.6% | +78.5% ⚠︎ | 1.802ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.136ms | +3.0% | +90.1% ⚠︎ | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.106ms | -3.9% | +91.4% ⚠︎ | 1.074ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.241ms | -3.3% | +87.1% ⚠︎ | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.222ms | -2.9% | +90.5% ⚠︎ | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 239.96µs | -16.0% | +51.2% ⚠︎ | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 139.76µs | +19.7% | +75.9% ⚠︎ | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.782ms | +1.4% | +95.9% ⚠︎ | 868.75µs | 1.782ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.840ms | -9.0% | +98.5% ⚠︎ | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.087ms | -3.9% | +99.8% ⚠︎ | 927.24µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 87.41µs | +6.9% | +87.4% ⚠︎ | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.487ms | -7.8% | +86.2% ⚠︎ | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 75.27µs | +4.7% | +89.2% ⚠︎ | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.464ms | -5.3% | +97.4% ⚠︎ | 743.36µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.

<script lang="ts">
  import { writable } from 'svelte/store';
  import CustomNode from './nodes/CustomNode.svelte';

  import {
    SvelteFlow,
    Controls,
    Background,
    MiniMap,
    type Node,
    type Edge,
  } from '@xyflow/svelte';

  import '@xyflow/svelte/dist/style.css';

  const nodes = writable<Node[]>([
    {
      "id": "1",
      "data": {
        "label": "Hello",
        "icon":"icon1"
      },
      "type": 'custom',
      "class":"custom",
      "position": {
        "x": 0,
        "y": 0
      },
      "positionAbsolute": {
        "x": 0,
        "y": 0
      },
      "width": 100,
      "height": 100,
      "selected": false
    },
    {
      "id": "2",
      "data": {
        "label": "World",
        "icon":"icon2"
      },
      "type": 'custom',
      "class":"custom",
      "position": {
        "x": 150,
        "y": 150
      },

      "width": 100,
      "height": 100,
      "selected": false
    },

  ]);

  const edges = writable<Edge[]>([
    {
      id: '1-2',
      source: '1',
      target: '2',
      type:'smoothstep',
      animated:true
    },
  ]);

  const nodeTypes = {
    custom: CustomNode
  };
  nodes.subscribe(($nodes) => {
    console.log('当前节点数据:', $nodes);
  });

  // 订阅边缘数据
  edges.subscribe(($edges) => {
    console.log('当前边缘数据:', $edges);
  });
</script>

<div style:height="100vh">
  <SvelteFlow {nodes} {nodeTypes} {edges} fitView>
    <Controls />
    <Background />
    <MiniMap />
  </SvelteFlow>
</div>

<style>
</style>

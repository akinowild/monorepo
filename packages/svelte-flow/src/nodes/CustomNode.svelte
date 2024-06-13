<script lang="ts">
    import { Handle,Position,type NodeProps } from "@xyflow/svelte";

    type $$Props = NodeProps;

    export let data: $$Props


</script>

<div class="custom-node">
    <img class="custom-icon" width="50" height="90" src={`/assets/${data.icon}.png`} alt="" />
    <Handle
            type="target"
            position={Position.Top}
            class="w-16 !bg-teal-500 rounded-none border-none"
    />
    <Handle
            type="source"
            position={Position.Bottom}
            class="w-16 !bg-teal-500 rounded-none border-none"
    />
</div>

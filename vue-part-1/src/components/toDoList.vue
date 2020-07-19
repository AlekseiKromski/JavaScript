<template>
    <div>
        <ul>
            <toDoItem />
        </ul>
    </div>
</template>

<script>
    import toDoItem from '@/components/toDoItem'
    export default {
        components: {
            toDoItem
        }
    }
</script>

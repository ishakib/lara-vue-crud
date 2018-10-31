<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">All Todo Task</div>

                    <div class="card-body">
                        <form action="./api/todo" method="POST" @submit.prevent="addTask()">
                            <div class="form-group">
                                <input type="text" name="name" v-model="name" placeholder="Add task" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Add task" class="btn btn-info">
                            </div>

                        </form>
                    </div>
        
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Task List</div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <th scope="col"> #SL </th>
                                <th scope="col"> Task </th>
                                <th scope="col"> Action </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>
                                        <button class="btn btn-primary">Edit</button>
                                        <button class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        
                </div>
            </div>
        </div>
    </div>
</template>





<script>
export default {
    data(){
        return{
            name : []
        }
    },
    methods:{
            addTask(){
                axios.post('./api/task', {name:this.name});
                alert('Adding Task');
            }
    },
    created(){
       console.log('TaskComponent Mounted');
    }   
}
</script>
<style>

</style>


<template>
    <div class="container">
        <div class="row justify-content-center pt-5">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Login to your account</h3>
                    </div>
                    <!-- <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" /> -->
                    <div class="card-body">

                        <Form @submit="handleLogin" :validation-schema="schema">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <Field name="username" type="text" class="form-control" />
                                <ErrorMessage name="username" class="error-feedback" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <Field name="password" type="password" class="form-control" />
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary btn-block" :disabled="loading">
                                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                    <span>Login</span>
                                </button>
                            </div>

                            <div class="form-group">
                                <div v-if="message" class="alert alert-danger" role="alert">
                                    {{ message }}
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: "Login",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            username: yup.string().required("Username is required!"),
            password: yup.string().required("Password is required!"),
        });

        return {
            loading: false,
            message: "",
            schema,
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        this.$Progress.start();
        if (this.loggedIn) {
            this.$router.push("/landing");
        }
    },
    mounted() {
        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish();
    },
    methods: {
        handleLogin(user) {
            this.loading = true;

            this.$store.dispatch("auth/login", user).then(
                () => {
                    this.$router.push("/landing");
                },
                (error) => {
                    this.loading = false;
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        },
    },
};
</script>
  
<style scoped></style>
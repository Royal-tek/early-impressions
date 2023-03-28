<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name : Home}">EARLY IMPRESSIONS</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <!-- <i class="bi bi-menu-down menu-icon" @click="toggleMobileNav" v-show="mobile"></i> -->
        <!-- <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/> -->
        <!-- <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
        </transition> -->
    </header>
</template>

<script>
// import menuIcon from '../assets/Icons/bars-regular.svg'
export default {
    name : 'Navbar2',
    components : {
        
    },
    data(){
        return{
            mobile : null,
            mobileNav : null,
            windowWidth : null
        }
    },
    created(){
        window.addEventListener('resize', this.checkScreen)
    },
    methods : {
        checkScreen(){
            this.windowWidth = window.innerWidth
            if(this.windowWidth <=750){
                this.mobile = true;
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        }
    }

}
</script>

<style lang="scss" scoped>
header{
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.6);
    z-index: 99;

    .link{
        font-weight: 500;
        padding: 0 8px;
        transition: .3s color ease;

        &:hover{
            color: #1eb8b8;
        }
    }

    nav{
        display: flex;
        padding: 25px 0;

        .branding{
            display: flex;
            align-items: center;

            .header{
            font-size: 24px;
            font-weight: 600;
            color: #000;
            text-decoration: none;
        }
        }

        .nav-links{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;

            ul{
                margin-right: 32px;

                .link{
                    margin-right: 32px;
                }

                .link:last-child{
                    margin-right: 0;
                }
            }
        }
        
    }

    .menu-icon{
        cursor: pointer;
        position: absolute;
        height: 25px;
        top: 32px;
        right: 25px;
        width: auto;
    }

    .mobile-nav{
        padding: 20px;
        width: 70%;
        max-width: 250px;
        z-index: 100000000;

        display: flex;
        flex-direction: column;
        position: fixed;
        background-color: #303030;
        top: 0;
        left: 0;
        height: 100vh;

        .link{
            padding: 15px 0;
            color: #fff;
        }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: all 1s ease;
    }

    .mobile-nav-enter{
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to{
        transform: translateX(0);
    }
    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }
}
</style>
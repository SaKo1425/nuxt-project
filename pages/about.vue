<template>

<div>
<!-- /.header -->

<div class="bg-violet-500 p-4 flex justify-between items-center">
  
  <!-- /.left -->

  <div class="flex items-center">
  <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEzNS4xMTUiIHgyPSI0MDIuNTg0IiB5MT0iMzgzLjkiIHkyPSIxMTYuNDMyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0MWRmZDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlZTgzZWYiLz48L2xpbmVhckdyYWRpZW50PjxnIGlkPSJncmFkaWVudCI+PHBhdGggZD0ibTQwOS4yODUgMzEwLjE2M2ExMjguMDE0IDEyOC4wMTQgMCAwIDEgLTEzMi41NTYtMjE1LjM2OSA4IDggMCAwIDAgLTQuNDc2LTE0LjA0Yy01LjQ1My0uNS0xMC45MjYtLjc1NC0xNi4yNTMtLjc1NC05Ny4wNDcgMC0xNzYgNzguOTUzLTE3NiAxNzZzNzguOTUzIDE3NiAxNzYgMTc2YTE3Ni4wNTkgMTc2LjA1OSAwIDAgMCAxNjMuODEyLTExMS41MjMgOCA4IDAgMCAwIC0xMC41MjctMTAuMzE0em0tNjIuMjIxIDc3LjQxMmExNTkuMDQzIDE1OS4wNDMgMCAwIDEgLTkxLjA2NCAyOC40MjVjLTg4LjIyNSAwLTE2MC03MS43NzUtMTYwLTE2MCAwLTg3LjEgNjkuOTYxLTE1OC4xNzUgMTU2LjY0NC0xNTkuOTY1YTE0My44NDggMTQzLjg0OCAwIDAgMCAtMzYuNjQ0IDk1Ljk2NWMwIDc5LjQgNjQuNiAxNDQgMTQ0IDE0NGExNDMuNzQgMTQzLjc0IDAgMCAwIDM3LjMyLTQuODgzIDE1OS45MjkgMTU5LjkyOSAwIDAgMSAtNTAuMjU2IDU2LjQ1OHptLTE5NC4zNDUtMjA2LjgyNGExMjYuOTcyIDEyNi45NzIgMCAwIDAgLTIyLjcxOSA1Mi42NjMgOCA4IDAgMSAxIC0xNS43NDgtMi44MjggMTQzLjA2NSAxNDMuMDY1IDAgMCAxIDI1LjU5MS01OS4zMzcgOCA4IDAgMSAxIDEyLjg3MyA5LjV6bTMzLjY0LTQxLjIxNGE4IDggMCAwIDEgLTIuMTc2IDExLjEgMTI3LjgxOCAxMjcuODE4IDAgMCAwIC0xMS4wMjggOC4zMTQgOCA4IDAgMCAxIC0xMC4zMS0xMi4yMzQgMTQ0LjAwOSAxNDQuMDA5IDAgMCAxIDEyLjQxMi05LjM2IDggOCAwIDAgMSAxMS4xMDIgMi4xOHptLTEuMzU5IDIxMi40NjNhOSA5IDAgMSAxIC05LTkgOSA5IDAgMCAxIDkgOXptLTE3LTMyYTggOCAwIDEgMSA4IDggOCA4IDAgMCAxIC04LTh6bS0yNC0xNmE4IDggMCAxIDEgLTgtOCA4IDggMCAwIDEgOCA4em0xMjggODhhOCA4IDAgMSAxIC04LTggOCA4IDAgMCAxIDggOHptLTMyLTI0YTggOCAwIDEgMSAtOC04IDggOCAwIDAgMSA4IDh6bTcyIDkuNWE5LjUgOS41IDAgMSAxIC05LjUtOS41IDkuNSA5LjUgMCAwIDEgOS41IDkuNXptMTI3LjYwOC0yMjIuODExYTggOCAwIDAgMCAtNi41ODMtNS40NmwtMjkuNjkxLTMuODM2LTEyLjgyMy0yNy4wNTNhOCA4IDAgMCAwIC0xNC40NTcgMGwtMTIuODI0IDI3LjA1My0yOS42OTEgMy44MzZhOCA4IDAgMCAwIC00LjQ2OCAxMy43NWwyMS43NjYgMjAuNTU1LTUuNTI2IDI5LjQyM2E4IDggMCAwIDAgMTEuNyA4LjVsMjYuMjc1LTE0LjM0OCAyNi4yNzYgMTQuMzQ4YTggOCAwIDAgMCAxMS43LTguNWwtNS41MjYtMjkuNDIzIDIxLjc2NS0yMC41NTVhOCA4IDAgMCAwIDIuMTA3LTguMjl6bS0zOC4wNDMgMjAuMjExYTggOCAwIDAgMCAtMi4zNjkgNy4yOTNsMy4yMTggMTcuMTMtMTUuMy04LjM1M2E4IDggMCAwIDAgLTcuNjY4IDBsLTE1LjMgOC4zNTMgMy4yMTgtMTcuMTNhOCA4IDAgMCAwIC0yLjM2NC03LjI5M2wtMTIuNjcyLTExLjk2NyAxNy4yODYtMi4yMzRhOCA4IDAgMCAwIDYuMi00LjUwN2w3LjQ2Ni0xNS43NDkgNy40NjYgMTUuNzQ5YTggOCAwIDAgMCA2LjIgNC41MDdsMTcuMjg2IDIuMjM0em04Ny40NiA2Ni43LTE4LjUxNy0yLjM5Mi04LTE2Ljg3MmE4IDggMCAwIDAgLTE0LjQ1OCAwbC04IDE2Ljg3Mi0xOC41MTEgMi4zOTJhOCA4IDAgMCAwIC00LjQ2OCAxMy43NWwxMy41NzUgMTIuODE5LTMuNDQ3IDE4LjM1YTggOCAwIDAgMCAxMS43IDguNWwxNi4zODYtOC45NDggMTYuMzg3IDguOTQ4YTggOCAwIDAgMCAxMS43LTguNWwtMy40NDYtMTguMzUgMTMuNTc0LTEyLjgxOWE4IDggMCAwIDAgLTQuNDY4LTEzLjc1em0tMjMuMjY4IDE3Ljk0YTggOCAwIDAgMCAtMi4zNjkgNy4yOTNsMS4xMzcgNi4wNTgtNS40MDktMi45NTRhOCA4IDAgMCAwIC03LjY2OCAwbC01LjQwOSAyLjk1NCAxLjEzOC02LjA1OGE4IDggMCAwIDAgLTIuMzY5LTcuMjkzbC00LjQ4MS00LjIzIDYuMTExLS43OWE4IDggMCAwIDAgNi4yLTQuNTA3bDIuNjQtNS41NyAyLjYzOSA1LjU3YTggOCAwIDAgMCA2LjIgNC41MDdsNi4xMTIuNzl6IiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz48L2c+PC9zdmc+" width="50" alt="Logo" class="mr-2" >
  <NuxtLink to="/index" class="inline-block p-2 text-violet-200 hover:text-violet-100 mr-2">Home</NuxtLink>
  <NuxtLink to="#" class="inline-block p-2 text-violet-200 hover:text-violet-100">About</NuxtLink>
  </div>

<!-- /.right -->

  <div class="hidden md:block">
    <NuxtLink to="#" class="inline-block p-2 text-violet-200 hover:text-violet-100 mr-2">Login</NuxtLink>
    <NuxtLink to="#" class="inline-block py-2 px-4 text-violet-700 bg-violet-400 hover:bg-violet-200 hover:text-violet-800 rounded transition ease-in duration-150">Sign Up</NuxtLink>
  </div>

</div>

<div>
    <h1>About Us</h1>
    <p class="p-welcome">Name: Jisoo Kim</p>
    <p class="p-welcome">E-mail: jisookim@gmail.com</p>
</div>
<!-- /.footer -->

<div class="p-10 bg-violet-700 text-violet-400 flex justidy-between">
  <!-- /.left -->

  <div class="md:w-1/2">
    <h3 class="text-large mb-2">Join the Newsletter:</h3>
    <form class="flex">
      <input type="email" class="w-full rounded-l py-3 px-4 outline-none focus:bg-rose-200">
      <button class="bg-rose-300 hover:bg-rose-400 text-rose-800 rounded-r px-4">Join</button>
    </form>
  </div>

<!-- /.right -->

  <div class="md:flex items-center m-10">
    Copyright &copy; Somnia 2020 - Health
  </div>
</div>



</div>
<!-- /.main -->

<!-- /.title -->
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>

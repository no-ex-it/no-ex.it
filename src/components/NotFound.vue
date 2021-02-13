<template>
	<div style="vertical-align: center">
		<p class="title">HTTP:
			<span class="">404</span>
		</p>
		<div class="code">
			<code><vue-typer :text='text'
				           :repeat='Infinity'
				           :shuffle='false'
				           initial-action='typing'
				           :pre-type-delay='70'
				           :type-delay='70'
				           :pre-erase-delay='2000'
				           :erase-delay='250'
				           erase-style='select-all'
				           :erase-on-complete='false'
				           caret-animation='smooth'></vue-typer>
			</code>
		</div>
	</div>
</template>
<script>

    export default {
        name: "NotFound",
        data() {
            return {
                text: `this.page.notFound = true;
\t
if (youSpeltItWrong) {
\t\ttryAgain("newName");
} else if (weScrewedUp) {
\t\tconsole.info("We're really sorry about that.");
\t\tconsole.log("Please inform our shity programmer so he can fix it");
\t\twindow.location = "/profile";
}`
            };
        },
        mounted() {
            let type = function (n, t) {
                const str                                          = document.getElementsByTagName("code")[n].innerHTML.toString();
                let i                                              = 0;
                document.getElementsByTagName("code")[n].innerHTML = "";
                setTimeout(() => {
                    let se = setInterval(() => {
                        i++;
                        document.getElementsByTagName("code")[n].innerHTML = `${str.slice(0, i)}|`;
                        if (i >= str.length) {
                            clearInterval(se);
                            document.getElementsByTagName("code")[n].innerHTML = str;
                        }
                    }, 10);
                }, t);
            };
            //type(0, 0);
            //type(1, 600);
            //type(2, 1300);
            //
            //document.getElementById("router").parentElement.classList.remove("box");
        }
    };
</script>

<style scoped lang="scss">
	p {
		font-family: "Bevan", cursive;
		font-size: 130px;
		margin: 0 0 0 !important;
		text-align: center;
		letter-spacing: 5px;
		background-color: black;
		color: transparent;
		text-shadow: 5px 5px 6px rgba(103, 103, 103, 0.45);
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;

		span {
			font-size: 1.2em;
		}
	}
	@keyframes rocking {
		0%, 100% {
			transform: rotateZ(-10deg);
		}

		50% {
			transform: rotateZ(10deg);
		}
	}

	.vue-typer {
		font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;

		.custom {
			&.char {
				&.typed {
					color: #009688;
				}

				&.selected {
					color: #E91E63;
				}
			}

			&.caret {
				animation: rocking 1s ease-in-out 0s infinite;

				&.typing {
					background-color: #009688;
				}

				&.selecting {
					display: inline-block;
					background-color: #E91E63;
				}
			}
		}
	}


</style>
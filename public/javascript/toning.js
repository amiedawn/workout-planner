async function toningFormHandler(event) {
  console.log("Ann is here");
  event.preventDefault();

  const { category_name, id, class_name } = event.target.dataset;

  const response = await fetch(`/api/plans`, {
    method: "POST",
    body: JSON.stringify({
      category_name,
      class_name,
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // response.render('dashboard');
    console.log("event.target.dataset", event.target.dataset);
 //   document.location.replace("/dashboard");
 document.location.replace("/newPlan");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelectorAll(".new-plan-form input[type=checkbox]")
  .forEach((input) => input.addEventListener("change", toningFormHandler));
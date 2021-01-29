async function newFormHandler(event) {
  event.preventDefault();

  const plan_title = document.querySelector('input[name="plan-title"]').value;
  //const category_name = document.querySelector('input[name="category-name"]').value;
  const category_name = document.querySelector('select[name="category-name"]')
    .value;
  //const class_name = document.querySelector('input[name="class-name"]').value;
  const class_name = document.querySelector('select[name="class-name"]').value;

  const response = await fetch(`/api/plans`, {
    method: "POST",
    body: JSON.stringify({
      plan_title,
      category_name,
      class_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // response.render('dashboard');
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

// fill the category drop down box (similar to get single plan in home-routes)
// async function catDropDown()   {
//   const fillDropDown = await fetch(`/api/categories`, {
//     method: "GET",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   });
//   .then(response => {
//     const categories = dbCategoryData
//   })
// }

// fill the category drop down box (similar to get single plan in home-routes)

// for category drop-down box to prevent event listener error
const el = document.querySelector(".new-plan-form");
if (el) {
  el.addEventListener("submit", newFormHandler, false);
}

// document.querySelector('.new-plan-form').addEventListener('submit', newFormHandler);

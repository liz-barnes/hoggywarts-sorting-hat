'use strict';

const createJumbotron = () => {
    $('#jumbotron').html(`
        <div class="containerJumbotron">
            <h1 class="display-4">Welcome to Hogwarts Sorting Hat!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" id="btnShowForm" href="#" role="button" style="background-color: #F2C94C; border: 1px solid #F2C94C; color: #345455;">Learn more</a>
      </div>
    `)
};

const createStudentForm = () => {
    $('#btnShowForm').on('click', () => {
        $('#containerForm').html(`
        <div class="wholeForm" style="border: 2px solid #345455;  width: 55%; margin: auto; padding: 25px 0px 20px 0px; border-radius: 10px; color: #345455;">
            <h3 class="text-center mb-3">Enter First Year's Name</h3>
            <div class="formBody d-flex justify-content-center">
                 <form class="form-inline" id="sortingForm">
                 <div class="form-group mb-2 p-2">
                    <label for="studentName" class="mr-2 text" style="color: #345455;">Student : </label>
                    <input type="text" class="form-control" id="inputName" placeholder="Hermione Granger">
                 </div>
                 <button type="submit" class="btn mb-2" id="btnShowCards" style="background-color: #F2C94C;">Reveal my house!</button>
                </form>
            </div>
        </div>;
    `)}
)};

const init = () => {
    createJumbotron();
    createStudentForm();
}

init();
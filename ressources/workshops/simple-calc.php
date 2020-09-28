<article class="hidden bg33" id="calculator">
    <h1 class="t2">Simple Calculator</h1>
    <div class="formContainer">
        <form id="calcForm">
            <div class="formBox">
                <label for="num1" class="t3">Number 1</label>
                <input class="borderRB" type="text" name="num1" id="num1" />
            </div>
            <div class="formBox">
                <label for="operator" class="t3">Oparator</label>
                <select class="borderRB" name="operator" id="operator">
                    <option value="plus">+</option>
                    <option value="minus">-</option>
                    <option value="division">/</option>
                    <option value="multiplication">*</option>
                    <option value="modulo">%</option>
                </select>
            </div>
            <div class="formBox">
                <label for="num2" class="t3">Number 2</label>
                <input class="borderRB" type="text" name="num2" id="num2" />
            </div>
            <div class="formBox">
                <button class="btn btn-primary submitBtn borderRB" id="calcSubmit">
                    Calculer
                </button>
            </div>
            <div class="formBox borderRB resultDisplay" id="resultDisplay"></div>
        </form>
    </div>
</article>
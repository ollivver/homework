//create an object
var testForm = {
	testBody : document.body,
	testTitle : document.createElement('div'),
	testHeader : document.createElement('h3'),
	testForm : document.createElement('form'),
	testButton : document.createElement('button'),
	valueCounter : 0,
	//function to create a page layout
	createTestLayout : function(headerTitle, buttonName) {
		this.testTitle.classList.add('test__quiz');
		this.testHeader.innerHTML = headerTitle || 'Default Test Title';
		this.testForm.classList.add('test__form')
		this.testButton.classList.add('test__submit');
		this.testButton.setAttribute('type', 'submit');
		this.testButton.setAttribute('form', 'test__form');
		this.testButton.setAttribute('value', 'check');
		this.testButton.innerHTML = buttonName || 'Check Button';
		this.testBody.appendChild(this.testTitle);
		this.testTitle.appendChild(this.testHeader);
		this.testTitle.appendChild(this.testForm)
		this.testForm.appendChild(this.testButton);
	},
	//function to create questions and an array of answers
	createQuestion : function(questionName, answersArray) {
		var qBody = document.createElement('figure');
		var qName = document.createElement('p');
		var qLabel;
		var qCheckbox;
		//counter for value differences in the answers array
		this.valueCounter++;
		qBody.classList.add('question__group');
		qName.classList.add('test__question');
		qName.innerHTML = questionName || 'Default Question Name';
		qBody.appendChild(qName);
			for (var i = 0; i < answersArray.length; i++) {
				var qText = document.createTextNode(answersArray[i] || ('Default Answer ' +(i+1)));
				qLabel = document.createElement('label');
				qCheckbox = document.createElement('input');
				qBr = document.createElement('br');
				qCheckbox.classList.add('check__box');
				qCheckbox.setAttribute('type', 'checkbox');
				qCheckbox.setAttribute('value', ('answer-' + this.valueCounter + '-option-'+(i+1)));
				qBody.appendChild(qLabel);
				qLabel.appendChild(qCheckbox);
				qLabel.appendChild(qText);
				qLabel.appendChild(qBr);
			}
			
		this.testForm.insertBefore(qBody, this.testButton);	
		
	}
	
};

testForm.createTestLayout('Тест по программированию', 'Проверить мои результаты');

testForm.createQuestion('1. Вопрос №1',  [' Вариант ответа №1',
                                          ' Вариант ответа №2',
                                          ' Вариант ответа №3'] );

testForm.createQuestion('2. Вопрос №2',  [' Вариант ответа №1',
                                          ' Вариант ответа №2',
                                          ' Вариант ответа №3'] );

testForm.createQuestion('3. Вопрос №3',  [' Вариант ответа №1',
                                          ' Вариант ответа №2',
                                          ' Вариант ответа №3'] );
define(
   'Controller',
    ['jquery'],

        function ($) {
        
            return Controller = 

            function Controller(model, view) {
                var self = this;
                var index = 0;
                // text input by pressing the 'Enter'
                view.elements.input.keypress(function(e) {
                if (e.which === 13) {
                    view.elements.addBtn.click();
                };
                e.stopPropagation();
            });

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('dblclick', '.item-text', editItem);

            // add records
            function addItem() {
                var newItem = view.elements.input.val();
                if (view.elements.addBtn.html() == 'Add') {
                    model.addItem(newItem);

                } else {
                    view.elements.addBtn.html('Add');
                    model.editItem(index, view.elements.input.val());
                }
                view.renderList(model.data);
                // clear input field
                view.elements.input.val(''); 
            };

            // delete function
            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            };

            // edit recirds
            function editItem() {
                index = $(this).parent().index();
                view.elements.input.val(model.data[index]).focus();
                view.elements.addBtn.html('Edit');
                //console.log('index', index);
            }
        };
    }
);

class ModalInstanceCtrl {
    constructor() {
    }

    $onInit() {
        this.items = this.resolve.items;
        this.selected = {
            item: this.items[0]
        };
    }
    ok() {
        this.close({$value: this.selected.item})
    }
    cancel() {
        this.dismiss({$value: 'cancel'})
    }
}

export const modalInstanceComponent = {
    template: require('./modal.component.html'),
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: ModalInstanceCtrl
  };
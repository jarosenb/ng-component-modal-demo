class dataCtrl {
    constructor($uibModal) {
        'ngInject';
        this.$uibModal = $uibModal;
        this.items = ['item1', 'item2', 'item3'];
        ///this.animationsEnabled = true
    }

    open() {
        var modalInstance = this.$uibModal.open({
            component: 'modalInstance',
            resolve: {
                items: () => this.items
            }
        })

        modalInstance.result.then(
            selectedItem => { console.log(selectedItem) }, 
            () => { console.log('closed modal.') }
        )
    }
}

export const dataComponent = {
    controller: dataCtrl,
    controllerAs: '$ctrl',
    template: require('./data.component.html')
}
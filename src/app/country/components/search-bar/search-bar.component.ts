import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  placeholder = input('Buscar');
  value = output<string>();
  initialValue = input<string>('');

  inputValue = linkedSignal<string>(()=>this.initialValue())

  debounceEffect = effect((onCleanup)=>{
    const value = this.inputValue();

    const timeout = setTimeout(()=>{
      this.value.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    })
  })
}

import { Pipe, PipeTransform } from '@angular/core';
import { IVoter } from "@core/models/voter.interface";
import { ISelectOption } from "@shared/interfaces/select-option.interface";

@Pipe({
  name: 'votersToSelectOptions',
  pure: true
})
export class VotersToSelectOptionsPipe implements PipeTransform {
  transform(voters: Array<IVoter> | null): Array<ISelectOption> {
    if (!voters) return [];
    return voters
      .filter(x => !x.voted)
      .map(x => ({label: x.name, value: x.id}) as ISelectOption);
  }
}

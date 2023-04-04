import { Pipe, PipeTransform } from '@angular/core';
import { ICandidate } from "@core/models/candidate.interface";
import { ISelectOption } from "@shared/interfaces/select-option.interface";

@Pipe({
  name: 'candidatesToSelectOptions'
})
export class CandidatesToSelectOptionsPipe implements PipeTransform {

  transform(candidates: Array<ICandidate> | null): Array<ISelectOption> {
    if (!candidates) return [];
    return candidates.map(x => ({label: x.name, value: x.id}) as ISelectOption);
  }

}

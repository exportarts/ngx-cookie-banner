import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export default function (durationMillis = 1000): AnimationTriggerMetadata {
    return trigger('transition', [
        state('*', style({ transform: 'translateY(0)' })),
        
        state('bottomOut', style({ transform: 'translateY(100%)' })),
        transition('* => bottomOut', animate(`${durationMillis}ms ease-out`))
    ])
}

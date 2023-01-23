<script setup>
import Basic from './demo/AnimatedGrid/Basic.vue'
</script>

# Animate Grid

<DemoContainer>
  <Basic />
</DemoContainer>

<<< @/components/demo/AnimatedGrid/Basic.vue

## Reference

### Properties

| Name          | Type                  | Default | Description                                                                                                                   |
| ------------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| auto-register | boolean               | false   | whether or not the children should be registered automatically. Should be set to true if you are not using `AnimatedGridItem` |
| duration      | number                |         | The duration of the animations                                                                                                |
| stagger       | number                |         | The time between each animation should start                                                                                  |
| easing        | keyof PopmotionEasing |         | The easing to use for the animation                                                                                           |

### Events

| Name              | Parameters       | Description                        |
| ----------------- | ---------------- | ---------------------------------- |
| start             | affectedElements | The elements that will be animated |
| end               | affectedElements | The elements that was animated     |
| beforeDestroy     |                  |                                    |
| afterDestroy      |                  |                                    |
| itemStart         | item             | When the item starts animating     |
| itemEnd           | item             | When the item stops animating      |
| itemBeforeDestroy |                  |                                    |
| itemAfterDestroy  |                  |                                    |

### Slots

There is only one default slot for the grid items

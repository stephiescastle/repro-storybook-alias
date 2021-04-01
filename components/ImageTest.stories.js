import ImageTest from './ImageTest.vue'

export default {
  title: 'ImageTest',
  component: ImageTest,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImageTest },
  template: '<ImageTest />',
})

export const Primary = Template.bind({})
Primary.storyName = 'ImageTest'

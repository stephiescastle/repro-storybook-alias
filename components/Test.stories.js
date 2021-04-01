import Test from './Test.vue'

export default {
  title: 'Test',
  component: Test,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Test },
  template: '<Test />',
})

export const Primary = Template.bind({})
Primary.storyName = 'Test'

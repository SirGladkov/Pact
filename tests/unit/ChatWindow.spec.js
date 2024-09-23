import { shallowMount } from '@vue/test-utils';
import ChatWindow from '../../src/components/ChatWindow.vue';

describe('ChatWindow.vue', () => {
  it('renders correctly with user data', () => {
    const user = {
      title: 'Чат 1',
      messages: [
        { id: 1, message: 'Сообщение 1', time: '20:43' },
        { id: 2, message: 'Сообщение 2', time: '20:44' }
      ]
    };

    const wrapper = shallowMount(ChatWindow, {
      props: { user }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('adds a new message on `onChangeSelectorMessage`', async () => {
  const user = {
    title: 'Чат 1',
    messages: []
  };

  const wrapper = shallowMount(ChatWindow, {
    props: { user }
  });

    wrapper.vm.newMessage = 'Новое сообщение';
    wrapper.vm.onChangeSelectorMessage();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.selectorUser.messages).toHaveLength(1);
    expect(wrapper.vm.selectorUser.messages[0].message).toBe('Новое сообщение');
  });
});

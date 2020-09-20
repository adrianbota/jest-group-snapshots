import g from '../index.js';

test('Jest Group Snapshots', () => {
    const before = document.querySelector('body').cloneNode(false);
    before.style.color = 'red';

    const after = document.querySelector('body').cloneNode(false);
    after.style.color = 'blue';

    expect(g('Body element before', before, 'Body element after', after)).toMatchSnapshot('ELEMENT');

    expect(g('Flag disabled', {}, 'Flag enabled', { enabled: true })).toMatchSnapshot('Object');
});

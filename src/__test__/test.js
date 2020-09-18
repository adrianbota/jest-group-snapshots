import group from '../index.js';

test('Jest Group Snapshots', () => {
    const g = group();

    const before1 = document.querySelector('body').cloneNode(false);
    before1.style.color = 'red';
    g.add(before1, 'Body element before');

    const after1 = document.querySelector('body').cloneNode(false);
    after1.style.color = 'blue';
    g.add(after1, 'Body element after');

    expect(g.values()).toMatchSnapshot('ELEMENT');

    expect(group()
        .add({}, 'Flag disabled')
        .add({ enabled: true }, 'Flag enabled')
        .values()
    ).toMatchSnapshot('Object');
});

document.querySelectorAll('.title').forEach(node => {
    node.style.color = 'red';
})

const $card = document.querySelector('#card')

if($card){
    $card.addEventListener('click', event => {
        event.preventDefault;
        if(event.target.classList.contains('js-remove')){
            const id = event.target.dataset.id
            fetch('/card/delete/' + id, {
                method: 'delete',
                
            }).then(res => res.json())
            .then(card => {
                if(card.courses.length){
                    const html = card.courses.map(c => {
                        return `
                        <tr>
                            <th>
                                <a href="/courses/${c.id}">${c.title}</a>
                            </th>
                            <th>
                                ${c.count}
                            </th>
                            <th>
                                <button class="btn red js-remove" data-id="${c.id}" href="/card/delete/${c.id}" >Delete</button>
                            </th>
                        </tr>
                        `
                    }).join('');
                    $card.querySelector('tbody').innerHTML = html;
                    document.querySelector('#total_count').innerHTML = `Total count: ${card.courses.length}`;
                } else {
                    $card.innerHTML = "<p>Card is empty</p>"
                    document.querySelector('#total_count').innerHTML = `Total count: 0`;
                }
            })
        }
    })
}
'use strict';
const nanoTest  = new (require('nanoTest')).test({
    'progress_bar' : false,
});
const retard = new (require('./index.js')).base();

nanoTest.add(
    'hello world',
    {
        'function':retard.full,
        'options':[
            {
                e:'html',
                i:[
                    {
                        e:'head',
                        i:[]
                    },
                    {
                        e:'body',
                        i:[
                            {
                                a:{'class':'full'},
                                i:'hello world'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    '===',
    '<html><head></head><body><div class="full">hello world</div></body></html>'
);
nanoTest.run();

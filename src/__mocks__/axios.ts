export default {
    get: (url:string) => {
        return Promise.resolve(
            JSON.stringify(
                [
                    {
                        name: 'Brianna Forbes',
                        playerName: 'Dreamlurk The Unstoppable',
                        asset: 'Foghammer Lead',
                        picUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        name: 'Darcy Candice Ball',
                        playerName: 'Crystaldash',
                        asset: 'Secret Glowquake Gold',
                        picUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        name: 'Hillary Gibbs',
                        playerName: 'Speedsoul',
                        asset: 'Shifting Rainshadow Iron',
                        picUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        name: 'Elva Becky Hammond',
                        playerName: 'Seekvenom The Mystic',
                        asset: `Valkyries' Opal Adamant`,
                        picUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        name: 'Enid Rose',
                        playerName: 'Coincurse The Ghoul',
                        asset: 'Jewelevil Bronze Of Goddesses',
                        picUrl: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    {
                        name: 'Esmeralda Carrillo',
                        playerName: 'Skulldart',
                        asset: 'Yellow Orichalcum Of Paladins',
                        picUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    },
                ]
            )
        );
    },
    post: (url:string, data:string) => {
        return Promise.resolve(
            alert(`data successfully submitted!! \n ${data}`)
        );
    }
}
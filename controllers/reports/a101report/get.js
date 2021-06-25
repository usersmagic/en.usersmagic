
module.exports = (req, res) => {
  const photos = {
    usersmagicLogo: '/res/images/reports/footer_logo.png',
    usersmagicSmallLogo: '/res/images/reports/small_logo_blue.png',
  }
  const graphs = [
    {
      graphNumber: 1,
      graphTitle: 'Hanenizde kaç kişi yaşıyor',
      yticks: [10,20,30,40,50],
      legends: [
        {
          color: '#4285F4',
          value: '1',
        },
        {
          color: '#EA4335',
          value: '2',
        },
        {
          color: '#FBBC04',
          value: '3',
        },
        {
          color: '#34A853',
          value: '4',
        },
        {
          color: '#FF6D01',
          value: '5',
        },
        {
          color: '#46BDC6',
          value: '5+',
        }
      ],
      barGroupNumber: 6,
      barGroups: [
        {
          label: 'Hepsi',
          bars: [
            {
              height: 2.1 / 50 * 100,
              value: '2,1',
              color: '#4285F4',
            }
          ,{
            height: 5.9 / 50 * 100,
            value: '5,9',
            color: '#EA4335',
          }, {
            height: 17.4 / 50 * 100,
            value: '17,4',
            color: '#FBBC04',
          }, {
            height: 37 / 50 * 100,
            value: '37',
            color: '#34A853',
          }, {
            height: 23.5 / 50 * 100,
            value: '23,5',
            color: '#FF6D01',
          }, {
            height: 14.1 / 50 * 100,
            value: '14,1',
            color: '#46BDC6',
          }
          ]
        },
        {
          label: '18-24',
          bars: [
            {
              height: 1.6 / 50 * 100,
              value: '1,6',
              color: '#4285F4',
            }
          ,{
            height: 4.6 / 50 * 100,
            value: '4,6',
            color: '#EA4335',
          }, {
            height: 15.7 / 50 * 100,
            value: '15,7',
            color: '#FBBC04',
          }, {
            height: 37.1 / 50 * 100,
            value: '37.1',
            color: '#34A853',
          }, {
            height: 24.5 / 50 * 100,
            value: '24,5',
            color: '#FF6D01',
          }, {
            height: 14.1 / 50 * 100,
            value: '14,1',
            color: '#46BDC6',
          }
          ]
        },
        {
          label: '25-34',
          bars: [
            {
              height: 6.1 / 50 * 100,
              value: '6,1',
              color: '#4285F4',
            }
          ,{
            height: 18.7 / 50 * 100,
            value: '5,9',
            color: '#EA4335',
          }, {
            height: 24.5 / 50 * 100,
            value: '17,4',
            color: '#FBBC04',
          }, {
            height: 31.3 / 50 * 100,
            value: '31.3',
            color: '#34A853',
          }, {
            height: 11.9 / 50 * 100,
            value: '23,5',
            color: '#FF6D01',
          }, {
            height: 7.4 / 50 * 100,
            value: '7,4',
            color: '#46BDC6',
          }
          ]
        },
        {
          label: '35-44',
          bars: [
            {
              height: 6.1 / 50 * 100,
              value: '6,1',
              color: '#4285F4',
            }
          ,{
            height: 8.5 / 50 * 100,
            value: '8,5',
            color: '#EA4335',
          }, {
            height: 39 / 50 * 100,
            value: '39',
            color: '#FBBC04',
          }, {
            height: 32.9 / 50 * 100,
            value: '32.9',
            color: '#34A853',
          }, {
            height: 12.2 / 50 * 100,
            value: '12.2',
            color: '#FF6D01',
          }, {
            height: 1.2 / 50 * 100,
            value: '1.2',
            color: '#46BDC6',
          }
          ]
        },
        {
          label: '45-54',
          bars: [
            {
              height: 5.9 / 50 * 100,
              value: '5,9',
              color: '#4285F4',
            }
          ,{
            height: 5.9 / 50 * 100,
            value: '5,9',
            color: '#EA4335',
          }, {
            height: 23.5 / 50 * 100,
            value: '17,4',
            color: '#FBBC04',
          }, {
            height: 41.2 / 50 * 100,
            value: '41.2',
            color: '#34A853',
          }, {
            height: 17.6 / 50 * 100,
            value: '17,6',
            color: '#FF6D01',
          }, {
            height: 5.9 / 50 * 100,
            value: '5.9',
            color: '#46BDC6',
          }
          ]
        },
        {
          label: '55-65',
          bars: [
            {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#4285F4',
            }
          ,{
            height: 33.3 / 50 * 100,
            value: '33.3',
            color: '#EA4335',
          }, {
            height: 33.3 / 50 * 100,
            value: '33.3',
            color: '#FBBC04',
          }, {
            height: 0 / 50 * 100,
            value: '0',
            color: '#34A853',
          }, {
            height: 0 / 50 * 100,
            value: '0',
            color: '#FF6D01',
          }, {
            height: 0 / 50 * 100,
            value: '0',
            color: '#46BDC6',
          }
          ]
        }
      ]
    },
    {
      graphNumber: 2,
      graphTitle: 'Ne kadar sıklıkla somun ekmek alıyorsunuz?',
      yticks: [20,40,60,80],
      legends: [
        {
          color: '#4285F4',
          value: 'Her gün',
        },
        {
          color: '#EA4335',
          value: 'Haftada 2-3 kez',
        },
        {
          color: '#FBBC04',
          value: 'Haftada 1 kez',
        },
        {
          color: '#34A853',
          value: '2 haftada 1 kez',
        },
        {
          color: '#FF6D01',
          value: '3 haftada 1 kez',
        },
        {
          color: '#46BDC6',
          value: 'Ayda 1 kez',
        },
        {
          color: '#7BAAF7',
          value: 'Almıyorum',
        }
      ],
      barGroupNumber: 6,
      barGroups: [
        {
          label: 'Hepsi',
          bars: [
            {
              height: 58.8 / 80 * 100,
              value: '58.8',
              color: '#4285F4',
            }
          ,{
            height: 21.2 / 80 * 100,
            value: '21.2',
            color: '#EA4335',
          }, {
            height: 5.7 / 80 * 100,
            value: '5.7',
            color: '#FBBC04',
          }, {
            height: 2 / 80 * 100,
            value: '2',
            color: '#34A853',
          }, {
            height: 0.8 / 80 * 100,
            value: '0.8',
            color: '#FF6D01',
          }, {
            height: 1.9 / 80 * 100,
            value: '1.9',
            color: '#46BDC6',
          },
          {
            height: 9.6 / 80 * 100,
            value: '9.6',
            color: '#7BAAF7',
          }
          ]
        },{
          label: '18-24',
          bars: [
            {
              height: 60.4 / 80 * 100,
              value: '60.4',
              color: '#4285F4',
            }
          ,{
            height: 20.9 / 80 * 100,
            value: '20.9',
            color: '#EA4335',
          }, {
            height: 5.3 / 80 * 100,
            value: '5.3',
            color: '#FBBC04',
          }, {
            height: 2 / 80 * 100,
            value: '2',
            color: '#34A853',
          }, {
            height: 0.7 / 80 * 100,
            value: '0.7',
            color: '#FF6D01',
          }, {
            height: 2 / 80 * 100,
            value: '2',
            color: '#46BDC6',
          },
          {
            height: 9.6 / 80 * 100,
            value: '8.7',
            color: '#7BAAF7',
          }
          ]
        },{
          label: '25-34',
          bars: [
            {
              height: 59.7 / 80 * 100,
              value: '59.7',
              color: '#4285F4',
            }
          ,{
            height: 19.7 / 80 * 100,
            value: '19.7',
            color: '#EA4335',
          }, {
            height: 6.8 / 80 * 100,
            value: '6.8',
            color: '#FBBC04',
          }, {
            height: 1 / 80 * 100,
            value: '1',
            color: '#34A853',
          }, {
            height: 0.6 / 80 * 100,
            value: '0.6',
            color: '#FF6D01',
          }, {
            height: 1 / 80 * 100,
            value: '1',
            color: '#46BDC6',
          },
          {
            height: 11.3 / 80 * 100,
            value: '11.3',
            color: '#7BAAF7',
          }
          ]
        },{
          label: '35-44',
          bars: [
            {
              height: 50 / 80 * 100,
              value: '50',
              color: '#4285F4',
            }
          ,{
            height: 25.6 / 80 * 100,
            value: '25.6',
            color: '#EA4335',
          }, {
            height: 6.1 / 80 * 100,
            value: '6.1',
            color: '#FBBC04',
          }, {
            height: 2.4 / 80 * 100,
            value: '2.4',
            color: '#34A853',
          }, {
            height: 1.2 / 80 * 100,
            value: '1.2',
            color: '#FF6D01',
          }, {
            height: 3.7 / 80 * 100,
            value: '3.7',
            color: '#46BDC6',
          },
          {
            height: 11 / 80 * 100,
            value: '11',
            color: '#7BAAF7',
          }
          ]
        },{
          label: '45-54',
          bars: [
            {
              height: 58.8 / 80 * 100,
              value: '58.8',
              color: '#4285F4',
            }
          ,{
            height: 29.4 / 80 * 100,
            value: '29.4',
            color: '#EA4335',
          }, {
            height: 5.9 / 80 * 100,
            value: '5.7',
            color: '#FBBC04',
          }, {
            height: 0 / 80 * 100,
            value: '0',
            color: '#34A853',
          }, {
            height: 0 / 80 * 100,
            value: '0',
            color: '#FF6D01',
          }, {
            height: 0 / 80 * 100,
            value: '0',
            color: '#46BDC6',
          },
          {
            height: 5.9 / 80 * 100,
            value: '5.9',
            color: '#7BAAF7',
          }
          ]
        },{
          label: '55-65',
          bars: [
            {
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#4285F4',
            }
          ,{
            height: 33.3 / 80 * 100,
            value: '33.3',
            color: '#EA4335',
          }, {
            height: 33.3 / 80 * 100,
            value: '33.3',
            color: '#FBBC04',
          }, {
            height: 0 / 80 * 100,
            value: '0',
            color: '#34A853',
          }, {
            height: 0 / 80 * 100,
            value: '0',
            color: '#FF6D01',
          }, {
            height: 0 / 80 * 100,
            value: '0',
            color: '#46BDC6',
          },
          {
            height: 0 / 80 * 100,
            value: '0',
            color: '#7BAAF7',
          }
          ]
        }
      ]
    },{
    graphNumber: 3,
    graphTitle: 'Somun ekmek aldığınızda kaç adet alıyorsunuz?',
    yticks: [20,40,60,80],
    legends: [
      {
        color: '#4285F4',
        value: '0',
      },
      {
        color: '#EA4335',
        value: '1',
      },
      {
        color: '#FBBC04',
        value: '2',
      },
      {
        color: '#34A853',
        value: '3',
      },
      {
        color: '#FF6D01',
        value: '4',
      },
      {
        color: '#46BDC6',
        value: '5',
      }
    ],
    barGroupNumber: 6,
    barGroups: [
      {
        label: 'Hepsi',
        bars: [
          {
            height: 9.1 / 80 * 100,
            value: '9,1',
            color: '#4285F4',
          }
        ,{
          height: 14.2 / 80 * 100,
          value: '14,2',
          color: '#EA4335',
        }, {
          height: 35.3 / 80 * 100,
          value: '35.3',
          color: '#FBBC04',
        }, {
          height: 22.5 / 80 * 100,
          value: '22.5',
          color: '#34A853',
        }, {
          height: 10.5 / 80 * 100,
          value: '10,5',
          color: '#FF6D01',
        }, {
          height: 8.5 / 80 * 100,
          value: '8,5',
          color: '#46BDC6',
        }
        ]
      
      },{
        label: '18-24',
        bars: [
          {
            height: 8.2 / 80 * 100,
            value: '8,2',
            color: '#4285F4',
          }
        ,{
          height: 12.4 / 80 * 100,
          value: '12,4',
          color: '#EA4335',
        }, {
          height: 34.3 / 80 * 100,
          value: '34.3',
          color: '#FBBC04',
        }, {
          height: 24.1 / 80 * 100,
          value: '24.1',
          color: '#34A853',
        }, {
          height: 11.8 / 80 * 100,
          value: '11,8',
          color: '#FF6D01',
        }, {
          height: 9.2 / 80 * 100,
          value: '9,2',
          color: '#46BDC6',
        }
        ]
      },{
        label: '25-34',
        bars: [
          {
            height: 11 / 80 * 100,
            value: '11',
            color: '#4285F4',
          }
        ,{
          height: 21.9 / 80 * 100,
          value: '21,9',
          color: '#EA4335',
        }, {
          height: 36.5 / 80 * 100,
          value: '36.5',
          color: '#FBBC04',
        }, {
          height: 16.8 / 80 * 100,
          value: '16.8',
          color: '#34A853',
        }, {
          height: 9.7 / 80 * 100,
          value: '9,7',
          color: '#FF6D01',
        }, {
          height: 4.2 / 80 * 100,
          value: '4,2',
          color: '#46BDC6',
        }
        ]
      },{
        label: '35-44',
        bars: [
          {
            height: 8.5 / 80 * 100,
            value: '8,5',
            color: '#4285F4',
          }
        ,{
          height: 25.6 / 80 * 100,
          value: '25,6',
          color: '#EA4335',
        }, {
          height: 39 / 80 * 100,
          value: '39',
          color: '#FBBC04',
        }, {
          height: 15.9 / 80 * 100,
          value: '15.9',
          color: '#34A853',
        }, {
          height: 4.9 / 80 * 100,
          value: '4,9',
          color: '#FF6D01',
        }, {
          height: 6.1 / 80 * 100,
          value: '6,1',
          color: '#46BDC6',
        }
        ]
      },{
        label: '45-54',
        bars: [
          {
            height: 5.9 / 80 * 100,
            value: '5,9',
            color: '#4285F4',
          }
        ,{
          height: 17.6 / 80 * 100,
          value: '17,6',
          color: '#EA4335',
        }, {
          height: 47.1 / 80 * 100,
          value: '47.1',
          color: '#FBBC04',
        }, {
          height: 17.6 / 80 * 100,
          value: '17.6',
          color: '#34A853',
        }, {
          height: 5.9 / 80 * 100,
          value: '5,9',
          color: '#FF6D01',
        }, {
          height: 5.9 / 80 * 100,
          value: '5,9',
          color: '#46BDC6',
        }
        ]
      },{
        label: '55-65',
        bars: [
          {
            height: 0 / 80 * 100,
            value: '0',
            color: '#4285F4',
          }
        ,{
          height: 66.7 / 80 * 100,
          value: '66.7',
          color: '#EA4335',
        }, {
          height: 33.3 / 80 * 100,
          value: '33.3',
          color: '#FBBC04',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#34A853',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      }
    ]
  },{
    graphNumber: 4,
    graphTitle: 'Ne sıklıkla paketli ekmek alıyorsunuz?',
    yticks: [20,40,60,80],
    legends: [
      {
        color: '#4285F4',
        value: 'Hepsi',
      },
      {
        color: '#EA4335',
        value: '18-24',
      },
      {
        color: '#FBBC04',
        value: '25-34',
      },
      {
        color: '#34A853',
        value: '35-44',
      },
      {
        color: '#FF6D01',
        value: '45-54',
      },
      {
        color: '#46BDC6',
        value: '55-65',
      }
    ],
    barGroupNumber: 6,
    barGroups: [
      {
        label: 'Her gün',
        bars: [
          {
            height: 7.8 / 80 * 100,
            value: '7,8',
            color: '#4285F4',
          }
        ,{
          height: 7.3 / 80 * 100,
          value: '7.3',
          color: '#EA4335',
        }, {
          height: 7.7 / 80 * 100,
          value: '7.7',
          color: '#FBBC04',
        }, {
          height: 8.5 / 80 * 100,
          value: '8.5',
          color: '#34A853',
        }, {
          height: 5.9 / 80 * 100,
          value: '5,9',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },{
        label: 'Haftada 2-3',
        bars: [
          {
            height: 17 / 80 * 100,
            value: '17',
            color: '#4285F4',
          }
        ,{
          height: 17.8 / 80 * 100,
          value: '17,8',
          color: '#EA4335',
        }, {
          height: 17.1 / 80 * 100,
          value: '17.1',
          color: '#FBBC04',
        }, {
          height: 24.4 / 80 * 100,
          value: '24.4',
          color: '#34A853',
        }, {
          height: 41.2 / 80 * 100,
          value: '41,2',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },{
        label: 'Haftada 1',
        bars: [
          {
            height: 17.7 / 80 * 100,
            value: '17.7',
            color: '#4285F4',
          }
        ,{
          height: 18.4 / 80 * 100,
          value: '18,4',
          color: '#EA4335',
        }, {
          height: 19.4 / 80 * 100,
          value: '19.4',
          color: '#FBBC04',
        }, {
          height: 23.2 / 80 * 100,
          value: '23.2',
          color: '#34A853',
        }, {
          height: 5.9 / 80 * 100,
          value: '5,9',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },{
        label: '2 Haftada 1',
        bars: [
          {
            height: 8.3 / 80 * 100,
            value: '8,3',
            color: '#4285F4',
          }
        ,{
          height: 8.3 / 80 * 100,
          value: '8,3',
          color: '#EA4335',
        }, {
          height: 7.1 / 80 * 100,
          value: '7.1',
          color: '#FBBC04',
        }, {
          height: 4.9 / 80 * 100,
          value: '4.9',
          color: '#34A853',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#FF6D01',
        }, {
          height: 66.7 / 80 * 100,
          value: '66,7',
          color: '#46BDC6',
        }
        ]
      },{
        label: '3 Haftada 1',
        bars: [
          {
            height: 3.3 / 80 * 100,
            value: '3,3',
            color: '#4285F4',
          }
        ,{
          height: 3.2 / 80 * 100,
          value: '3,2',
          color: '#EA4335',
        }, {
          height: 2.1 / 80 * 100,
          value: '2.1',
          color: '#FBBC04',
        }, {
          height: 1.2 / 80 * 100,
          value: '1.2',
          color: '#34A853',
        }, {
          height: 5.9 / 80 * 100,
          value: '5.9',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },{
        label: 'Ayda 1',
        bars: [
          {
            height: 9.6 / 80 * 100,
            value: '9.6',
            color: '#4285F4',
          }
        ,{
          height: 9 / 80 * 100,
          value: '9',
          color: '#EA4335',
        }, {
          height: 15.2 / 80 * 100,
          value: '15.2',
          color: '#FBBC04',
        }, {
          height: 11 / 80 * 100,
          value: '11',
          color: '#34A853',
        }, {
          height: 5.9 / 80 * 100,
          value: '5.9',
          color: '#FF6D01',
        }, {
          height: 33.3 / 80 * 100,
          value: '33.3',
          color: '#46BDC6',
        }
        ]
      },{
        label: 'Almıyorum',
        bars: [
          {
            height: 35.5 / 80 * 100,
            value: '35.5',
            color: '#4285F4',
          }
        ,{
          height: 35.8 / 80 * 100,
          value: '35.8',
          color: '#EA4335',
        }, {
          height: 31.3 / 80 * 100,
          value: '31.3',
          color: '#FBBC04',
        }, {
          height: 26.8 / 80 * 100,
          value: '26.8',
          color: '#34A853',
        }, {
          height: 35.3 / 80 * 100,
          value: '35.3',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      }
    ]
  },
  {
    graphNumber: 5,
    graphTitle: 'Ne sıklıkla paketli ekmek alıyorsunuz?',
    yticks: [20,40,60,80],
    legends: [
      {
        color: '#4285F4',
        value: '0',
      },
      {
        color: '#EA4335',
        value: '1',
      },
      {
        color: '#FBBC04',
        value: '2',
      },
      {
        color: '#34A853',
        value: '3',
      },
      {
        color: '#FF6D01',
        value: '4',
      },
      {
        color: '#46BDC6',
        value: '5',
      }
    ],
    barGroupNumber: 6,
    barGroups: [
      {
        label: 'Hepsi',
        bars: [
          {
            height: 34.1 / 80 * 100,
            value: '34,1',
            color: '#4285F4',
          }
        ,{
          height: 37.1 / 80 * 100,
          value: '37.2',
          color: '#EA4335',
        }, {
          height: 18.9 / 80 * 100,
          value: '18.9',
          color: '#FBBC04',
        }, {
          height: 5.8 / 80 * 100,
          value: '5.8',
          color: '#34A853',
        }, {
          height: 2.3 / 80 * 100,
          value: '2,3',
          color: '#FF6D01',
        }, {
          height: 1.7 / 80 * 100,
          value: '1.7',
          color: '#46BDC6',
        }
        ]
      },{
        label: '18-24',
        bars: [
          {
            height: 33.9 / 80 * 100,
            value: '33.9',
            color: '#4285F4',
          }
        ,{
          height: 35.4 / 80 * 100,
          value: '35.4',
          color: '#EA4335',
        }, {
          height: 20 / 80 * 100,
          value: '20',
          color: '#FBBC04',
        }, {
          height: 6.2 / 80 * 100,
          value: '6.2',
          color: '#34A853',
        }, {
          height: 2.6 / 80 * 100,
          value: '2,6',
          color: '#FF6D01',
        }, {
          height: 1.8 / 80 * 100,
          value: '1.8',
          color: '#46BDC6',
        }
        ]
      },{
        label: '25-34',
        bars: [
          {
            height: 30.9 / 80 * 100,
            value: '30.9',
            color: '#4285F4',
          }
        ,{
          height: 49.5 / 80 * 100,
          value: '49,5',
          color: '#EA4335',
        }, {
          height: 14.1 / 80 * 100,
          value: '19.4',
          color: '#FBBC04',
        }, {
          height: 2.6 / 80 * 100,
          value: '2.6',
          color: '#34A853',
        }, {
          height: 2.6 / 80 * 100,
          value: '2,6',
          color: '#FF6D01',
        }, {
          height: 0.3 / 80 * 100,
          value: '0.3',
          color: '#46BDC6',
        }
        ]
      },{
        label: '35-44',
        bars: [
          {
            height: 8.3 / 80 * 100,
            value: '8,3',
            color: '#4285F4',
          }
        ,{
          height: 24.4 / 80 * 100,
          value: '24,4',
          color: '#EA4335',
        }, {
          height: 52.4 / 80 * 100,
          value: '52.4',
          color: '#FBBC04',
        }, {
          height: 2.4 / 80 * 100,
          value: '2.4',
          color: '#34A853',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#FF6D01',
        }, {
          height: 2.4 / 80 * 100,
          value: '2,4',
          color: '#46BDC6',
        }
        ]
      },{
        label: '45-54',
        bars: [
          {
            height: 29.4 / 80 * 100,
            value: '29,4',
            color: '#4285F4',
          }
        ,{
          height: 47.1 / 80 * 100,
          value: '47,1',
          color: '#EA4335',
        }, {
          height: 17.9 / 80 * 100,
          value: '17.9',
          color: '#FBBC04',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#34A853',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#FF6D01',
        }, {
          height: 5.9 / 80 * 100,
          value: '5.9',
          color: '#46BDC6',
        }
        ]
      },{
        label: '55-65',
        bars: [
          {
            height: 0 / 80 * 100,
            value: '0',
            color: '#4285F4',
          }
        ,{
          height: 66.7 / 80 * 100,
          value: '66.7',
          color: '#EA4335',
        }, {
          height: 33.3 / 80 * 100,
          value: '33.3',
          color: '#FBBC04',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#34A853',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },
    ]},
  {
        graphNumber: 6,
        graphTitle: 'Ne sıklıkla paket süt alıyorsunuz?',
        yticks: [10,20,30,40,50],
        legends: [
          {
            color: '#4285F4',
            value: 'Hepsi',
          },
          {
            color: '#EA4335',
            value: '18-24',
          },
          {
            color: '#FBBC04',
            value: '25-34',
          },
          {
            color: '#34A853',
            value: '35-44',
          },
          {
            color: '#FF6D01',
            value: '45-54',
          },
          {
            color: '#46BDC6',
            value: '55-65',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Her gün',
            bars: [
              {
                height: 6.4 / 50 * 100,
                value: '6,4',
                color: '#4285F4',
              }
            ,{
              height: 6.1 / 50 * 100,
              value: '6,1',
              color: '#EA4335',
            }, {
              height: 6.8 / 50 * 100,
              value: '6,8',
              color: '#FBBC04',
            }, {
              height: 9.8 / 50 * 100,
              value: '9.8',
              color: '#34A853',
            }, {
              height: 5.9 / 50 * 100,
              value: '5.9',
              color: '#FF6D01',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },{
            label: 'Haftada 2-3',
            bars: [
              {
                height: 40.9 / 50 * 100,
                value: '40,9',
                color: '#4285F4',
              }
            ,{
              height: 40.9 / 50 * 100,
              value: '40,9',
              color: '#EA4335',
            }, {
              height: 42.3 / 50 * 100,
              value: '42,3',
              color: '#FBBC04',
            }, {
              height: 40.2 / 50 * 100,
              value: '40.2',
              color: '#34A853',
            }, {
              height: 47.1 / 50 * 100,
              value: '47.1',
              color: '#FF6D01',
            }, {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#46BDC6',
            }
            ]
          },{
            label: 'Haftada 1',
            bars: [
              {
                height: 29.4 / 50 * 100,
                value: '29,4',
                color: '#4285F4',
              }
            ,{
              height: 28.5 / 50 * 100,
              value: '28,5',
              color: '#EA4335',
            }, {
              height: 30.3 / 50 * 100,
              value: '30,3',
              color: '#FBBC04',
            }, {
              height: 28 / 50 * 100,
              value: '28',
              color: '#34A853',
            }, {
              height: 29.4 / 50 * 100,
              value: '29.4',
              color: '#FF6D01',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },{
            label: '2 Haftada 1',
            bars: [
              {
                height: 9.8 / 50 * 100,
                value: '9.8',
                color: '#4285F4',
              }
            ,{
              height: 10.2 / 50 * 100,
              value: '10.2',
              color: '#EA4335',
            }, {
              height: 9.7 / 50 * 100,
              value: '9,7',
              color: '#FBBC04',
            }, {
              height: 4.9 / 50 * 100,
              value: '4.9',
              color: '#34A853',
            }, {
              height: 5.9 / 50 * 100,
              value: '5.9',
              color: '#FF6D01',
            }, {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#46BDC6',
            }
            ]
          },{
            label: '3 Haftada 1',
            bars: [
              {
                height: 3.2 / 50 * 100,
                value: '3,2',
                color: '#4285F4',
              }
            ,{
              height: 2.8 / 50 * 100,
              value: '2,8',
              color: '#EA4335',
            }, {
              height: 1.9 / 50 * 100,
              value: '1,9',
              color: '#FBBC04',
            }, {
              height: 8.5 / 50 * 100,
              value: '8.5',
              color: '#34A853',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },{
            label: 'Ayda 1',
            bars: [
              {
                height: 4.8 / 50 * 100,
                value: '4,8',
                color: '#4285F4',
              }
            ,{
              height: 4.7 / 50 * 100,
              value: '4,7',
              color: '#EA4335',
            }, {
              height: 5.8 / 50 * 100,
              value: '5,8',
              color: '#FBBC04',
            }, {
              height: 2.4 / 50 * 100,
              value: '2.4',
              color: '#34A853',
            }, {
              height: 5.9 / 50 * 100,
              value: '5.9',
              color: '#FF6D01',
            }, {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#46BDC6',
            }
            ]
          },{
            label: 'Hepsi',
            bars: [
              {
                height: 5.7 / 50 * 100,
                value: '5,7',
                color: '#4285F4',
              }
            ,{
              height: 6.8 / 50 * 100,
              value: '6,8',
              color: '#EA4335',
            }, {
              height: 3.2 / 50 * 100,
              value: '3,2',
              color: '#FBBC04',
            }, {
              height: 6.1 / 50 * 100,
              value: '6.1',
              color: '#34A853',
            }, {
              height: 5.9 / 50 * 100,
              value: '5.9',
              color: '#FF6D01',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },
        ]
      },
  {
    graphNumber: 7,
    graphTitle: 'Paket süt aldığınızda kaç litre alıyorsunuz?',
    yticks: [20,40,60,80],
    legends: [
      {
        color: '#4285F4',
        value: '0 Litre',
      },
      {
        color: '#EA4335',
        value: '1 Litre',
      },
      {
        color: '#FBBC04',
        value: '2 Litre',
      },
      {
        color: '#34A853',
        value: '3 Litre',
      },
      {
        color: '#FF6D01',
        value: '4 Litre',
      },
      {
        color: '#46BDC6',
        value: '5 Litre',
      }
    ],
    barGroupNumber: 6,
    barGroups: [
      {
        label: 'Hepsi',
        bars: [
          {
            height: 5.4 / 80 * 100,
            value: '5,4',
            color: '#4285F4',
          }
        ,{
          height: 45.4 / 80 * 100,
          value: '45,4',
          color: '#EA4335',
        }, {
          height: 28.7 / 80 * 100,
          value: '28,7',
          color: '#FBBC04',
        }, {
          height: 9.6 / 80 * 100,
          value: '9.6',
          color: '#34A853',
        }, {
          height: 5 / 80 * 100,
          value: '5',
          color: '#FF6D01',
        }, {
          height: 5.9 / 80 * 100,
          value: '5.9',
          color: '#46BDC6',
        }
        ]
      },{
        label: '18-24',
        bars: [
          {
            height: 40.9 / 80 * 100,
            value: '40,9',
            color: '#4285F4',
          }
        ,{
          height: 45.2 / 80 * 100,
          value: '45,2',
          color: '#EA4335',
        }, {
          height: 28.5 / 80 * 100,
          value: '28,5',
          color: '#FBBC04',
        }, {
          height: 9.3 / 80 * 100,
          value: '9.3',
          color: '#34A853',
        }, {
          height: 5.2 / 80 * 100,
          value: '5.2',
          color: '#FF6D01',
        }, {
          height: 5.2 / 80 * 100,
          value: '5.2',
          color: '#46BDC6',
        }
        ]
      },{
        label: '25-34',
        bars: [
          {
            height: 2.3 / 80 * 100,
            value: '2,3',
            color: '#4285F4',
          }
        ,{
          height: 49.2 / 80 * 100,
          value: '49,2',
          color: '#EA4335',
        }, {
          height: 28 / 80 * 100,
          value: '28',
          color: '#FBBC04',
        }, {
          height: 10.3 / 80 * 100,
          value: '10.3',
          color: '#34A853',
        }, {
          height: 4.2 / 80 * 100,
          value: '4.2',
          color: '#FF6D01',
        }, {
          height: 6.1 / 80 * 100,
          value: '6.1',
          color: '#46BDC6',
        }
        ]
      },{
        label: '35-44',
        bars: [
          {
            height: 6.1 / 80 * 100,
            value: '6,1',
            color: '#4285F4',
          }
        ,{
          height: 45.1 / 80 * 100,
          value: '45,1',
          color: '#EA4335',
        }, {
          height: 20.7 / 80 * 100,
          value: '20,7',
          color: '#FBBC04',
        }, {
          height: 14.6 / 80 * 100,
          value: '14.6',
          color: '#34A853',
        }, {
          height: 6.1 / 80 * 100,
          value: '6.1',
          color: '#FF6D01',
        }, {
          height: 7.3 / 80 * 100,
          value: '7.3',
          color: '#46BDC6',
        }
        ]
      },{
        label: '45-54',
        bars: [
          {
            height: 5.9 / 80 * 100,
            value: '5,9',
            color: '#4285F4',
          }
        ,{
          height: 29.4 / 80 * 100,
          value: '29,4',
          color: '#EA4335',
        }, {
          height: 47.1 / 80 * 100,
          value: '47,1',
          color: '#FBBC04',
        }, {
          height: 11.8 / 80 * 100,
          value: '11.8',
          color: '#34A853',
        }, {
          height: 5.9 / 80 * 100,
          value: '5.9',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },{
        label: '55-65',
        bars: [
          {
            height: 0 / 80 * 100,
            value: '0',
            color: '#4285F4',
          }
        ,{
          height: 33.3 / 80 * 100,
          value: '33.3',
          color: '#EA4335',
        }, {
          height: 66.7 / 80 * 100,
          value: '66,7',
          color: '#FBBC04',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#34A853',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#FF6D01',
        }, {
          height: 0 / 80 * 100,
          value: '0',
          color: '#46BDC6',
        }
        ]
      },
    ]
  },
  {
        graphNumber: 8,
        graphTitle: 'Ne sıklıkla yoğurt alıyorsunuz?',
        yticks: [10,20,30,40,50],
        legends: [
          {
            color: '#4285F4',
            value: 'Her gün',
          },
          {
            color: '#EA4335',
            value: 'Haftada 2-3 kez',
          },
          {
            color: '#FBBC04',
            value: 'Haftada 1 kez',
          },
          {
            color: '#34A853',
            value: '2 haftada 1 kez',
          },
          {
            color: '#FF6D01',
            value: '3 haftada 1 kez',
          },
          {
            color: '#46BDC6',
            value: 'Ayda 1 kez',
          },
          {
            color: '#7BAAF7',
            value: 'Almıyorum',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 3.2 / 50 * 100,
                value: '3.2',
                color: '#4285F4',
              }
            ,{
              height: 22 / 50 * 100,
              value: '22',
              color: '#EA4335',
            }, {
              height: 35.9 / 50 * 100,
              value: '35.9',
              color: '#FBBC04',
            }, {
              height: 14.6 / 50 * 100,
              value: '14.6',
              color: '#34A853',
            }, {
              height: 3.4 / 50 * 100,
              value: '3.4',
              color: '#FF6D01',
            }, {
              height: 4.5 / 50 * 100,
              value: '4.5',
              color: '#46BDC6',
            },
            {
              height: 16.3 / 50 * 100,
              value: '16.3',
              color: '#7BAAF7',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 3.3 / 50 * 100,
                value: '3.3',
                color: '#4285F4',
              }
            ,{
              height: 21.3 / 50 * 100,
              value: '21.3',
              color: '#EA4335',
            }, {
              height: 36.3 / 50 * 100,
              value: '36.3',
              color: '#FBBC04',
            }, {
              height: 14.2 / 50 * 100,
              value: '14.2',
              color: '#34A853',
            }, {
              height: 3.4 / 50 * 100,
              value: '3.4',
              color: '#FF6D01',
            }, {
              height: 4.9 / 50 * 100,
              value: '4.9',
              color: '#46BDC6',
            },
            {
              height: 16.6 / 50 * 100,
              value: '16.6',
              color: '#7BAAF7',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 4.2 / 50 * 100,
                value: '4.2',
                color: '#4285F4',
              }
            ,{
              height: 26.9 / 50 * 100,
              value: '26.9',
              color: '#EA4335',
            }, {
              height: 36.9 / 50 * 100,
              value: '36.9',
              color: '#FBBC04',
            }, {
              height: 12.3 / 50 * 100,
              value: '12.3',
              color: '#34A853',
            }, {
              height: 1.3 / 50 * 100,
              value: '1.3',
              color: '#FF6D01',
            }, {
              height: 3.9 / 50 * 100,
              value: '3.9',
              color: '#46BDC6',
            },
            {
              height: 14.6 / 50 * 100,
              value: '14.6',
              color: '#7BAAF7',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 2.4 / 50 * 100,
                value: '2.4',
                color: '#4285F4',
              }
            ,{
              height: 17.1 / 50 * 100,
              value: '17.1',
              color: '#EA4335',
            }, {
              height: 41.5 / 50 * 100,
              value: '41.5',
              color: '#FBBC04',
            }, {
              height: 11 / 50 * 100,
              value: '11',
              color: '#34A853',
            }, {
              height: 2.4 / 50 * 100,
              value: '2.4',
              color: '#FF6D01',
            }, {
              height: 4.9 / 50 * 100,
              value: '4.9',
              color: '#46BDC6',
            },
            {
              height: 20.7 / 50 * 100,
              value: '20.7',
              color: '#7BAAF7',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 0 / 50 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 29.4 / 50 * 100,
              value: '29.4',
              color: '#EA4335',
            }, {
              height: 41.2 / 50 * 100,
              value: '41.2',
              color: '#FBBC04',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 5.9 / 50 * 100,
              value: '5.9',
              color: '#46BDC6',
            },
            {
              height: 23.5 / 50 * 100,
              value: '23.5',
              color: '#7BAAF7',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 0 / 50 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 0 / 50 * 100,
              value: '0',
              color: '#EA4335',
            }, {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#FBBC04',
            }, {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#34A853',
            }, {
              height: 33.3 / 50 * 100,
              value: '33.3',
              color: '#FF6D01',
            }, {
              height: 0 / 50 * 100,
              value: '0',
              color: '#46BDC6',
            },
            {
              height: 0 / 50 * 100,
              value: '0',
              color: '#7BAAF7',
            }
            ]
          },
        ]
      },
      {
          graphNumber: 9,
          graphTitle: 'Yoğurt aldığınızda kaç kilogram alıyorsunuz?',
          yticks: [20,40,60,80],
          legends: [
            {
              color: '#4285F4',
              value: '0 kilo',
            },
            {
              color: '#EA4335',
              value: '1 kilo',
            },
            {
              color: '#FBBC04',
              value: '2 kilo',
            },
            {
              color: '#34A853',
              value: '3 kilo',
            },
            {
              color: '#FF6D01',
              value: '4 kilo',
            },
            {
              color: '#46BDC6',
              value: '5 kilo',
            }
          ],
          barGroupNumber: 6,
          barGroups: [
            {
              label: 'Hepsi',
              bars: [
                {
                  height: 16.1 / 80 * 100,
                  value: '16,1',
                  color: '#4285F4',
                }
              ,{
                height: 24.3 / 80 * 100,
                value: '24,3',
                color: '#EA4335',
              }, {
                height: 19.6 / 80 * 100,
                value: '19,6',
                color: '#FBBC04',
              }, {
                height: 16.7 / 80 * 100,
                value: '16.7',
                color: '#34A853',
              }, {
                height: 4.4 / 80 * 100,
                value: '4.4',
                color: '#FF6D01',
              }, {
                height: 18.9 / 80 * 100,
                value: '18.9',
                color: '#46BDC6',
              }
              ]
            },{
              label: '18-24',
              bars: [
                {
                  height: 16.5 / 80 * 100,
                  value: '16,5',
                  color: '#4285F4',
                }
              ,{
                height: 23.2 / 80 * 100,
                value: '23,2',
                color: '#EA4335',
              }, {
                height: 20.1 / 80 * 100,
                value: '20,1',
                color: '#FBBC04',
              }, {
                height: 16 / 80 * 100,
                value: '16',
                color: '#34A853',
              }, {
                height: 4.3 / 80 * 100,
                value: '4.3',
                color: '#FF6D01',
              }, {
                height: 19.8 / 80 * 100,
                value: '19.8',
                color: '#46BDC6',
              }
              ]
            },{
              label: '25-34',
              bars: [
                {
                  height: 13.5 / 80 * 100,
                  value: '13,5',
                  color: '#4285F4',
                }
              ,{
                height: 27 / 80 * 100,
                value: '27',
                color: '#EA4335',
              }, {
                height: 20.3 / 80 * 100,
                value: '20.3',
                color: '#FBBC04',
              }, {
                height: 18.6 / 80 * 100,
                value: '18.6',
                color: '#34A853',
              }, {
                height: 3.5 / 80 * 100,
                value: '3.5',
                color: '#FF6D01',
              }, {
                height: 17 / 80 * 100,
                value: '17',
                color: '#46BDC6',
              }
              ]
            },{
              label: '35-44',
              bars: [
                {
                  height: 18.3 / 80 * 100,
                  value: '18.3',
                  color: '#4285F4',
                }
              ,{
                height: 32.9 / 80 * 100,
                value: '32,9',
                color: '#EA4335',
              }, {
                height: 12.2 / 80 * 100,
                value: '12,2',
                color: '#FBBC04',
              }, {
                height: 24.4 / 80 * 100,
                value: '24.4',
                color: '#34A853',
              }, {
                height: 1.2 / 80 * 100,
                value: '1.2',
                color: '#FF6D01',
              }, {
                height: 11 / 80 * 100,
                value: '11',
                color: '#46BDC6',
              }
              ]
            },{
              label: '45-54',
              bars: [
                {
                  height: 23.5 / 80 * 100,
                  value: '23.5',
                  color: '#4285F4',
                }
              ,{
                height: 17.6 / 80 * 100,
                value: '17,6',
                color: '#EA4335',
              }, {
                height: 23.5 / 80 * 100,
                value: '23,5',
                color: '#FBBC04',
              }, {
                height: 29.4 / 80 * 100,
                value: '29.4',
                color: '#34A853',
              }, {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#FF6D01',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#46BDC6',
              }
              ]
            },{
              label: '55-65',
              bars: [
                {
                  height: 0 / 80 * 100,
                  value: '0',
                  color: '#4285F4',
                }
              ,{
                height: 33.3 / 80 * 100,
                value: '33.3',
                color: '#EA4335',
              }, {
                height: 66.7 / 80 * 100,
                value: '66,7',
                color: '#FBBC04',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#34A853',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#FF6D01',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#46BDC6',
              }
              ]
            },
          ]
        },
      {
            graphNumber: 10,
            graphTitle: 'Ne sıklıkla salça alıyorsunuz?',
            yticks: [10,20,30,40,50],
            legends: [
              {
                color: '#4285F4',
                value: 'Her gün',
              },
              {
                color: '#EA4335',
                value: 'Haftada 2-3 kez',
              },
              {
                color: '#FBBC04',
                value: 'Haftada 1 kez',
              },
              {
                color: '#34A853',
                value: '2 haftada 1 kez',
              },
              {
                color: '#FF6D01',
                value: '3 haftada 1 kez',
              },
              {
                color: '#46BDC6',
                value: 'Ayda 1 kez',
              }
            ],
            barGroupNumber: 6,
            barGroups: [
              {
                label: 'Hepsi',
                bars: [
                  {
                    height: 1 / 50 * 100,
                    value: '1',
                    color: '#4285F4',
                  }
                ,{
                  height: 3.3 / 50 * 100,
                  value: '3.3',
                  color: '#EA4335',
                }, {
                  height: 10.7 / 50 * 100,
                  value: '10.7',
                  color: '#FBBC04',
                }, {
                  height: 18.5 / 50 * 100,
                  value: '18.5',
                  color: '#34A853',
                }, {
                  height: 12 / 50 * 100,
                  value: '12',
                  color: '#FF6D01',
                }, {
                  height: 25.8 / 50 * 100,
                  value: '25.8',
                  color: '#46BDC6',
                }
                ]
              },{
                label: '18-24',
                bars: [
                  {
                    height: 0.9 / 50 * 100,
                    value: '0.9',
                    color: '#4285F4',
                  }
                ,{
                  height: 3.6 / 50 * 100,
                  value: '3.6',
                  color: '#EA4335',
                }, {
                  height: 10.9 / 50 * 100,
                  value: '10.9',
                  color: '#FBBC04',
                }, {
                  height: 18.3 / 50 * 100,
                  value: '18.3',
                  color: '#34A853',
                }, {
                  height: 12.3 / 50 * 100,
                  value: '12.3',
                  color: '#FF6D01',
                }, {
                  height: 25 / 50 * 100,
                  value: '25',
                  color: '#46BDC6',
                }
                ]
              },{
                label: '25-34',
                bars: [
                  {
                    height: 1.3 / 50 * 100,
                    value: '1.3',
                    color: '#4285F4',
                  }
                ,{
                  height: 3.5 / 50 * 100,
                  value: '3.5',
                  color: '#EA4335',
                }, {
                  height: 10 / 50 * 100,
                  value: '10',
                  color: '#FBBC04',
                }, {
                  height: 13.9 / 50 * 100,
                  value: '13.9',
                  color: '#34A853',
                }, {
                  height: 9.4 / 50 * 100,
                  value: '9.4',
                  color: '#FF6D01',
                }, {
                  height: 30 / 50 * 100,
                  value: '30',
                  color: '#46BDC6',
                }
                ]
              },{
                label: '35-44',
                bars: [
                  {
                    height: 2.4 / 50 * 100,
                    value: '2.4',
                    color: '#4285F4',
                  }
                ,{
                  height: 3.7 / 50 * 100,
                  value: '3.7',
                  color: '#EA4335',
                }, {
                  height: 7.3 / 50 * 100,
                  value: '7.3',
                  color: '#FBBC04',
                }, {
                  height: 14.6 / 50 * 100,
                  value: '14.6',
                  color: '#34A853',
                }, {
                  height: 9.8 / 50 * 100,
                  value: '9.8',
                  color: '#FF6D01',
                }, {
                  height: 35.4 / 50 * 100,
                  value: '35.4',
                  color: '#46BDC6',
                }
                ]
              },{
                label: '45-54',
                bars: [
                  {
                    height: 0 / 50 * 100,
                    value: '0',
                    color: '#4285F4',
                  }
                ,{
                  height: 0 / 50 * 100,
                  value: '0',
                  color: '#EA4335',
                }, {
                  height: 11.8 / 50 * 100,
                  value: '11.8',
                  color: '#FBBC04',
                }, {
                  height: 5.9 / 50 * 100,
                  value: '5.9',
                  color: '#34A853',
                }, {
                  height: 23.5 / 50 * 100,
                  value: '23.5',
                  color: '#FF6D01',
                }, {
                  height: 41.2 / 50 * 100,
                  value: '41.2',
                  color: '#46BDC6',
                }
                ]
              },{
                label: '55-65',
                bars: [
                  {
                    height: 0 / 50 * 100,
                    value: '0',
                    color: '#4285F4',
                  }
                ,{
                  height: 0 / 50 * 100,
                  value: '0',
                  color: '#EA4335',
                }, {
                  height: 0 / 50 * 100,
                  value: '0',
                  color: '#FBBC04',
                }, {
                  height: 33.3 / 50 * 100,
                  value: '33.3',
                  color: '#34A853',
                }, {
                  height: 33.3 / 50 * 100,
                  value: '33.3',
                  color: '#FF6D01',
                }, {
                  height: 0 / 50 * 100,
                  value: '0',
                  color: '#46BDC6',
                }
                ]
              },
            ]
          },
      {
        graphNumber: 11,
        graphTitle: 'Salça aldığınızda kaç kavanoz/teneke alıyorsunuz?',
        yticks: [20,40,60,80],
        legends: [
          {
            color: '#4285F4',
            value: '0',
          },
          {
            color: '#EA4335',
            value: '1',
          },
          {
            color: '#FBBC04',
            value: '2',
          },
          {
            color: '#34A853',
            value: '3',
          },
          {
            color: '#FF6D01',
            value: '4',
          },
          {
            color: '#46BDC6',
            value: '5',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 13.8 / 80 * 100,
                value: '13.8',
                color: '#4285F4',
              }
            ,{
              height: 49.2 / 80 * 100,
              value: '49.2',
              color: '#EA4335',
            }, {
              height: 20.2 / 80 * 100,
              value: '20.2',
              color: '#FBBC04',
            }, {
              height: 6 / 80 * 100,
              value: '6',
              color: '#34A853',
            }, {
              height: 2.7 / 80 * 100,
              value: '2.7',
              color: '#FF6D01',
            }, {
              height: 8.1 / 80 * 100,
              value: '8.1',
              color: '#46BDC6',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 14.5 / 80 * 100,
                value: '14.5',
                color: '#4285F4',
              }
            ,{
              height: 47.6 / 80 * 100,
              value: '47.6',
              color: '#EA4335',
            }, {
              height: 20.1 / 80 * 100,
              value: '20.1',
              color: '#FBBC04',
            }, {
              height: 6 / 80 * 100,
              value: '6',
              color: '#34A853',
            }, {
              height: 3.3 / 80 * 100,
              value: '3.3',
              color: '#FF6D01',
            }, {
              height: 8.4 / 80 * 100,
              value: '8.4',
              color: '#46BDC6',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 11.9 / 80 * 100,
                value: '11.9',
                color: '#4285F4',
              }
            ,{
              height: 55 / 80 * 100,
              value: '55',
              color: '#EA4335',
            }, {
              height: 19.6 / 80 * 100,
              value: '19.6',
              color: '#FBBC04',
            }, {
              height: 5.1 / 80 * 100,
              value: '5.1',
              color: '#34A853',
            }, {
              height: 1.6 / 80 * 100,
              value: '1.6',
              color: '#FF6D01',
            }, {
              height: 6.8 / 80 * 100,
              value: '6.8',
              color: '#46BDC6',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 11 / 80 * 100,
                value: '11',
                color: '#4285F4',
              }
            ,{
              height: 64.6 / 80 * 100,
              value: '64.6',
              color: '#EA4335',
            }, {
              height: 17.1 / 80 * 100,
              value: '17.1',
              color: '#FBBC04',
            }, {
              height: 3.7 / 80 * 100,
              value: '3.7',
              color: '#34A853',
            }, {
              height: 1.2 / 80 * 100,
              value: '1.2',
              color: '#FF6D01',
            }, {
              height: 2.4 / 80 * 100,
              value: '2.4',
              color: '#46BDC6',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#4285F4',
              }
            ,{
              height: 64.7 / 80 * 100,
              value: '64.7',
              color: '#EA4335',
            }, {
              height: 17.6 / 80 * 100,
              value: '17.6',
              color: '#FBBC04',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#46BDC6',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 66.7 / 80 * 100,
              value: '66.7',
              color: '#EA4335',
            }, {
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#FBBC04',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },
        ]
      },
      {
        graphNumber: 12,
        graphTitle: 'Ne sıklıkla ayçiçek yağı alıyorsunuz?',
        yticks: [20,40,60,80],
        legends: [
          {
            color: '#4285F4',
            value: 'Her gün',
          },
          {
            color: '#EA4335',
            value: 'Haftada 2-3 kez',
          },
          {
            color: '#FBBC04',
            value: 'Haftada 1 kez',
          },
          {
            color: '#34A853',
            value: '2 Haftada 1 kez',
          },
          {
            color: '#FF6D01',
            value: '3 Haftada 1 kez',
          },
          {
            color: '#46BDC6',
            value: 'Ayda 1 kez',
          },
          {
            color: '#7BAAF7',
            value: '2 Ayda 1 kez',
          },
          {
            color: '#F07B72',
            value: '3 Ayda 1 kez',
          },
          {
            color: '#71C287',
            value: 'Almıyorum',
          },
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 0.7 / 80 * 100,
                value: '0.7',
                color: '#4285F4',
              }
            ,{
              height: 1.5 / 80 * 100,
              value: '1.5',
              color: '#EA4335',
            }, {
              height: 5.4 / 80 * 100,
              value: '5.4',
              color: '#FBBC04',
            }, {
              height: 12.5 / 80 * 100,
              value: '12.5',
              color: '#34A853',
            }, {
              height: 13.3 / 80 * 100,
              value: '13.3',
              color: '#FF6D01',
            }, {
              height: 42.4 / 80 * 100,
              value: '42.4',
              color: '#46BDC6',
            }, {
              height: 12.4 / 80 * 100,
              value: '12.4',
              color: '#7BAAF7',
            }, {
              height: 6 / 80 * 100,
              value: '6',
              color: '#F07B72',
            }, {
              height: 3 / 80 * 100,
              value: '3',
              color: '#71C287',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 0.8 / 80 * 100,
                value: '0.8',
                color: '#4285F4',
              }
            ,{
              height: 1.4 / 80 * 100,
              value: '1.4',
              color: '#EA4335',
            }, {
              height: 5.8 / 80 * 100,
              value: '5.8',
              color: '#FBBC04',
            }, {
              height: 13.4 / 80 * 100,
              value: '13.4',
              color: '#34A853',
            }, {
              height: 13.4 / 80 * 100,
              value: '13.4',
              color: '#FF6D01',
            }, {
              height: 43 / 80 * 100,
              value: '43',
              color: '#46BDC6',
            }, {
              height: 11.9 / 80 * 100,
              value: '11.9',
              color: '#7BAAF7',
            }, {
              height: 5.5 / 80 * 100,
              value: '5.5',
              color: '#F07B72',
            }, {
              height: 2.4 / 80 * 100,
              value: '2.4',
              color: '#71C287',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 0.3 / 80 * 100,
                value: '0.3',
                color: '#4285F4',
              }
            ,{
              height: 2.3 / 80 * 100,
              value: '2.3',
              color: '#EA4335',
            }, {
              height: 3.9 / 80 * 100,
              value: '3.9',
              color: '#FBBC04',
            }, {
              height: 7.4 / 80 * 100,
              value: '7.4',
              color: '#34A853',
            }, {
              height: 11.6 / 80 * 100,
              value: '11.6',
              color: '#FF6D01',
            }, {
              height: 44.1 / 80 * 100,
              value: '44.1',
              color: '#46BDC6',
            }, {
              height: 13.5 / 80 * 100,
              value: '13.5',
              color: '#7BAAF7',
            }, {
              height: 9.6 / 80 * 100,
              value: '9.6',
              color: '#F07B72',
            }, {
              height: 3.9 / 80 * 100,
              value: '3.9',
              color: '#71C287',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 2.4 / 80 * 100,
                value: '2.4',
                color: '#4285F4',
              }
            ,{
              height: 1.2 / 80 * 100,
              value: '1.2',
              color: '#EA4335',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FBBC04',
            }, {
              height: 11 / 80 * 100,
              value: '11',
              color: '#34A853',
            }, {
              height: 4.9 / 80 * 100,
              value: '4.9',
              color: '#FF6D01',
            }, {
              height: 47.6 / 80 * 100,
              value: '47.6',
              color: '#46BDC6',
            }, {
              height: 14.6 / 80 * 100,
              value: '14.6',
              color: '#7BAAF7',
            }, {
              height: 4.9 / 80 * 100,
              value: '4.9',
              color: '#F07B72',
            }, {
              height: 9.8 / 80 * 100,
              value: '9.8',
              color: '#71C287',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 0 / 80 * 100,
              value: '0',
              color: '#EA4335',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#FBBC04',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 64.7 / 80 * 100,
              value: '64.7',
              color: '#46BDC6',
            }, {
              height: 17.6 / 80 * 100,
              value: '17.6',
              color: '#7BAAF7',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#F07B72',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#71C287',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 0 / 80 * 100,
              value: '0',
              color: '#EA4335',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FBBC04',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 66.7 / 80 * 100,
              value: '66.7',
              color: '#FF6D01',
            }, {
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#46BDC6',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#7BAAF7',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#F07B72',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#71C287',
            }
            ]
          },
        ]},
      {
        graphNumber: 13,
        graphTitle: 'Ayçiçek yağı aldığınızda kaç litre alıyorsunuz?',
        yticks: [20,40,60,80],
        legends: [
          {
            color: '#4285F4',
            value: 'Her gün',
          },
          {
            color: '#EA4335',
            value: 'Haftada 2-3 kez',
          },
          {
            color: '#FBBC04',
            value: 'Haftada 1 kez',
          },
          {
            color: '#34A853',
            value: '2 Haftada 1 kez',
          },
          {
            color: '#FF6D01',
            value: '3 Haftada 1 kez',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 9.9 / 80 * 100,
                value: '9.9',
                color: '#4285F4',
              }
            ,{
              height: 13.2 / 80 * 100,
              value: '13.2',
              color: '#EA4335',
            }, {
              height: 6.9 / 80 * 100,
              value: '6.9',
              color: '#FBBC04',
            }, {
              height: 5 / 80 * 100,
              value: '5',
              color: '#34A853',
            }, {
              height: 61.6 / 80 * 100,
              value: '61.6',
              color: '#FF6D01',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 9 / 80 * 100,
                value: '9',
                color: '#4285F4',
              }
            ,{
              height: 13.9 / 80 * 100,
              value: '13.9',
              color: '#EA4335',
            }, {
              height: 6.5 / 80 * 100,
              value: '6.5',
              color: '#FBBC04',
            }, {
              height: 5.1 / 80 * 100,
              value: '5.1',
              color: '#34A853',
            }, {
              height: 62.6 / 80 * 100,
              value: '62.6',
              color: '#FF6D01',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 11.9 / 80 * 100,
                value: '11.9',
                color: '#4285F4',
              }
            ,{
              height: 10.3 / 80 * 100,
              value: '10.3',
              color: '#EA4335',
            }, {
              height: 5.5 / 80 * 100,
              value: '5.5',
              color: '#FBBC04',
            }, {
              height: 4.2 / 80 * 100,
              value: '4.2',
              color: '#34A853',
            }, {
              height: 64 / 80 * 100,
              value: '64',
              color: '#FF6D01',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 8.5 / 80 * 100,
                value: '8.5',
                color: '#4285F4',
              }
            ,{
              height: 12.2 / 80 * 100,
              value: '12.2',
              color: '#EA4335',
            }, {
              height: 3.7 / 80 * 100,
              value: '3.7',
              color: '#FBBC04',
            }, {
              height: 4.9 / 80 * 100,
              value: '4.9',
              color: '#34A853',
            }, {
              height: 59.8 / 80 * 100,
              value: '59.8',
              color: '#FF6D01',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#4285F4',
              }
            ,{
              height: 17.6 / 80 * 100,
              value: '17.6',
              color: '#EA4335',
            }, {
              height: 11.8 / 80 * 100,
              value: '11.8',
              color: '#FBBC04',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#34A853',
            }, {
              height: 58.8 / 80 * 100,
              value: '58.8',
              color: '#FF6D01',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 66.7 / 80 * 100,
                value: '66.7',
                color: '#4285F4',
              }
            ,{
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#EA4335',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FBBC04',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }
            ]
          },
        ]},
      {
              graphNumber: 14,
              graphTitle: 'Ne sıklıkla makarna alıyorsunuz?',
              yticks: [20,40,60,80],
              legends: [
                {
                  color: '#4285F4',
                  value: 'Her gün',
                },
                {
                  color: '#EA4335',
                  value: 'Haftada 2-3 kez',
                },
                {
                  color: '#FBBC04',
                  value: 'Haftada 1 kez',
                },
                {
                  color: '#34A853',
                  value: '2 haftada 1 kez',
                },
                {
                  color: '#FF6D01',
                  value: '3 haftada 1 kez',
                },
                {
                  color: '#46BDC6',
                  value: 'Ayda 1 kez',
                },
                {
                  color: '#7BAAF7',
                  value: 'Almıyorum',
                }
              ],
              barGroupNumber: 6,
              barGroups: [
                {
                  label: 'Hepsi',
                  bars: [
                    {
                      height: 1.2 / 80 * 100,
                      value: '1.2',
                      color: '#4285F4',
                    }
                  ,{
                    height: 15.5 / 80 * 100,
                    value: '15.5',
                    color: '#EA4335',
                  }, {
                    height: 25.3 / 80 * 100,
                    value: '25.3',
                    color: '#FBBC04',
                  }, {
                    height: 21.8 / 80 * 100,
                    value: '21.8',
                    color: '#34A853',
                  }, {
                    height: 9.7 / 80 * 100,
                    value: '9.7',
                    color: '#FF6D01',
                  }, {
                    height: 25.3 / 80 * 100,
                    value: '25.3',
                    color: '#46BDC6',
                  },
                  {
                    height: 1.3 / 80 * 100,
                    value: '1.3',
                    color: '#7BAAF7',
                  }
                  ]
                },{
                  label: '18-24',
                  bars: [
                    {
                      height: 1.3 / 80 * 100,
                      value: '1.3',
                      color: '#4285F4',
                    }
                  ,{
                    height: 16.5 / 80 * 100,
                    value: '16.5',
                    color: '#EA4335',
                  }, {
                    height: 25.2 / 80 * 100,
                    value: '25.2',
                    color: '#FBBC04',
                  }, {
                    height: 20.7 / 80 * 100,
                    value: '20.7',
                    color: '#34A853',
                  }, {
                    height: 10.5 / 80 * 100,
                    value: '10.5',
                    color: '#FF6D01',
                  }, {
                    height: 24.6 / 80 * 100,
                    value: '24.6',
                    color: '#46BDC6',
                  },
                  {
                    height: 1.2 / 80 * 100,
                    value: '1.2',
                    color: '#7BAAF7',
                  }
                  ]
                },{
                  label: '25-34',
                  bars: [
                    {
                      height: 0 / 80 * 100,
                      value: '0',
                      color: '#4285F4',
                    }
                  ,{
                    height: 11.6 / 80 * 100,
                    value: '11.6',
                    color: '#EA4335',
                  }, {
                    height: 20.3 / 80 * 100,
                    value: '20.3',
                    color: '#FBBC04',
                  }, {
                    height: 20.9 / 80 * 100,
                    value: '20.9',
                    color: '#34A853',
                  }, {
                    height: 8.7 / 80 * 100,
                    value: '8.7',
                    color: '#FF6D01',
                  }, {
                    height: 37.3 / 80 * 100,
                    value: '37.3',
                    color: '#46BDC6',
                  },
                  {
                    height: 1.3 / 80 * 100,
                    value: '1.3',
                    color: '#7BAAF7',
                  }
                  ]
                },{
                  label: '35-44',
                  bars: [
                    {
                      height: 0 / 80 * 100,
                      value: '0',
                      color: '#4285F4',
                    }
                  ,{
                    height: 12.2 / 80 * 100,
                    value: '12.2',
                    color: '#EA4335',
                  }, {
                    height: 28 / 80 * 100,
                    value: '28',
                    color: '#FBBC04',
                  }, {
                    height: 18.3 / 80 * 100,
                    value: '18.3',
                    color: '#34A853',
                  }, {
                    height: 12.2 / 80 * 100,
                    value: '12.2',
                    color: '#FF6D01',
                  }, {
                    height: 29.3 / 80 * 100,
                    value: '23.3',
                    color: '#46BDC6',
                  },
                  {
                    height: 0 / 80 * 100,
                    value: '0',
                    color: '#7BAAF7',
                  }
                  ]
                },{
                  label: '45-54',
                  bars: [
                    {
                      height: 0 / 80 * 100,
                      value: '0',
                      color: '#4285F4',
                    }
                  ,{
                    height: 23.5 / 80 * 100,
                    value: '23.5',
                    color: '#EA4335',
                  }, {
                    height: 29.4 / 80 * 100,
                    value: '29.4',
                    color: '#FBBC04',
                  }, {
                    height: 11.8 / 80 * 100,
                    value: '11.8',
                    color: '#34A853',
                  }, {
                    height: 5.9 / 80 * 100,
                    value: '5.9',
                    color: '#FF6D01',
                  }, {
                    height: 23.5 / 80 * 100,
                    value: '23.5',
                    color: '#46BDC6',
                  },
                  {
                    height: 5.9 / 80 * 100,
                    value: '5.9',
                    color: '#7BAAF7',
                  }
                  ]
                },{
                  label: '55-65',
                  bars: [
                    {
                      height: 0 / 80 * 100,
                      value: '0',
                      color: '#4285F4',
                    }
                  ,{
                    height: 0 / 80 * 100,
                    value: '0',
                    color: '#EA4335',
                  }, {
                    height: 0 / 80 * 100,
                    value: '0',
                    color: '#FBBC04',
                  }, {
                    height: 66.7 / 80 * 100,
                    value: '66.7',
                    color: '#34A853',
                  }, {
                    height: 0 / 80 * 100,
                    value: '0',
                    color: '#FF6D01',
                  }, {
                    height: 33.3 / 80 * 100,
                    value: '33.3',
                    color: '#46BDC6',
                  },
                  {
                    height: 0 / 80 * 100,
                    value: '0',
                    color: '#7BAAF7',
                  }
                  ]
                },
              ]
            },
      {
        graphNumber: 15,
        graphTitle: 'Makarna aldığınızda kaç paket alıyorsunuz?',
        yticks: [20,40,60,80],
        legends: [
          {
            color: '#4285F4',
            value: '0',
          },
          {
            color: '#EA4335',
            value: '1',
          },
          {
            color: '#FBBC04',
            value: '2',
          },
          {
            color: '#34A853',
            value: '3',
          },
          {
            color: '#FF6D01',
            value: '4',
          },
          {
            color: '#46BDC6',
            value: '5',
          },
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 1.4 / 80 * 100,
                value: '1.4',
                color: '#4285F4',
              }
            ,{
              height: 11.3 / 80 * 100,
              value: '11.3',
              color: '#EA4335',
            }, {
              height: 31.8 / 80 * 100,
              value: '31.8',
              color: '#FBBC04',
            }, {
              height: 25.1 / 80 * 100,
              value: '25.1',
              color: '#34A853',
            }, {
              height: 12.9 / 80 * 100,
              value: '12.9',
              color: '#FF6D01',
            }, {
              height: 17.6 / 80 * 100,
              value: '17.6',
              color: '#46BDC6',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 1.3 / 80 * 100,
                value: '1.3',
                color: '#4285F4',
              }
            ,{
              height: 10.7 / 80 * 100,
              value: '10.7',
              color: '#EA4335',
            }, {
              height: 31.7 / 80 * 100,
              value: '31.7',
              color: '#FBBC04',
            }, {
              height: 24.6 / 80 * 100,
              value: '24.6',
              color: '#34A853',
            }, {
              height: 14.1 / 80 * 100,
              value: '14.1',
              color: '#FF6D01',
            }, {
              height: 17.5 / 80 * 100,
              value: '17.5',
              color: '#46BDC6',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 1.3 / 80 * 100,
                value: '1.3',
                color: '#4285F4',
              }
            ,{
              height: 10.3 / 80 * 100,
              value: '10.3',
              color: '#EA4335',
            }, {
              height: 30 / 80 * 100,
              value: '30',
              color: '#FBBC04',
            }, {
              height: 28.1 / 80 * 100,
              value: '28.1',
              color: '#34A853',
            }, {
              height: 9.4 / 80 * 100,
              value: '9.4',
              color: '#FF6D01',
            }, {
              height: 21 / 80 * 100,
              value: '21',
              color: '#46BDC6',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 11 / 80 * 100,
              value: '11',
              color: '#EA4335',
            }, {
              height: 31.7 / 80 * 100,
              value: '31.7',
              color: '#FBBC04',
            }, {
              height: 26.8 / 80 * 100,
              value: '26.8',
              color: '#34A853',
            }, {
              height: 11 / 80 * 100,
              value: '11',
              color: '#FF6D01',
            }, {
              height: 19.5 / 80 * 100,
              value: '19.5',
              color: '#46BDC6',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#4285F4',
              }
            ,{
              height: 11.8 / 80 * 100,
              value: '11.8',
              color: '#EA4335',
            }, {
              height: 17.6 / 80 * 100,
              value: '17.6',
              color: '#FBBC04',
            }, {
              height: 41.2 / 80 * 100,
              value: '41.2',
              color: '#34A853',
            }, {
              height: 11.8 / 80 * 100,
              value: '11.8',
              color: '#FF6D01',
            }, {
              height: 11.8 / 80 * 100,
              value: '11.8',
              color: '#46BDC6',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#EA4335',
            }, {
              height: 66.7 / 80 * 100,
              value: '66.7',
              color: '#FBBC04',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },
        ]
      },
      {
          graphNumber: 16,
          graphTitle: 'Ne sıklıkla un alıyorsunuz?',
          yticks: [20,40,60,80],
          legends: [
            {
              color: '#4285F4',
              value: 'Her gün',
            },
            {
              color: '#EA4335',
              value: 'Haftada 2-3 kez',
            },
            {
              color: '#FBBC04',
              value: 'Haftada 1 kez',
            },
            {
              color: '#34A853',
              value: '2 Haftada 1 kez',
            },
            {
              color: '#FF6D01',
              value: '3 Haftada 1 kez',
            },
            {
              color: '#46BDC6',
              value: 'Ayda 1 kez',
            },
            {
              color: '#7BAAF7',
              value: '2 Ayda 1 kez',
            },
            {
              color: '#F07B72',
              value: '3 Ayda 1 kez',
            },
            {
              color: '#71C287',
              value: 'Almıyorum',
            },
          ],
          barGroupNumber: 6,
          barGroups: [
            {
              label: 'Hepsi',
              bars: [
                {
                  height: 0.4 / 80 * 100,
                  value: '0.4',
                  color: '#4285F4',
                }
              ,{
                height: 2.8 / 80 * 100,
                value: '2.8',
                color: '#EA4335',
              }, {
                height: 6.2 / 80 * 100,
                value: '6.2',
                color: '#FBBC04',
              }, {
                height: 11.6 / 80 * 100,
                value: '11.6',
                color: '#34A853',
              }, {
                height: 10.2 / 80 * 100,
                value: '10.2',
                color: '#FF6D01',
              }, {
                height: 34.6 / 80 * 100,
                value: '34.6',
                color: '#46BDC6',
              }, {
                height: 14.8 / 80 * 100,
                value: '14.8',
                color: '#7BAAF7',
              }, {
                height: 8.4 / 80 * 100,
                value: '8.4',
                color: '#F07B72',
              }, {
                height: 3.4 / 80 * 100,
                value: '3.4',
                color: '#71C287',
              }
              ]
            },{
              label: '18-24',
              bars: [
                {
                  height: 0.4 / 80 * 100,
                  value: '0.4',
                  color: '#4285F4',
                }
              ,{
                height: 2.5 / 80 * 100,
                value: '2.5',
                color: '#EA4335',
              }, {
                height: 6.7 / 80 * 100,
                value: '6.7',
                color: '#FBBC04',
              }, {
                height: 11.1 / 80 * 100,
                value: '11.1',
                color: '#34A853',
              }, {
                height: 10.1 / 80 * 100,
                value: '10.1',
                color: '#FF6D01',
              }, {
                height: 35 / 80 * 100,
                value: '35',
                color: '#46BDC6',
              }, {
                height: 15.4 / 80 * 100,
                value: '15.4',
                color: '#7BAAF7',
              }, {
                height: 8.3 / 80 * 100,
                value: '8.3',
                color: '#F07B72',
              }, {
                height: 3.4 / 80 * 100,
                value: '3.4',
                color: '#71C287',
              }
              ]
            },{
              label: '25-34',
              bars: [
                {
                  height: 0 / 80 * 100,
                  value: '0',
                  color: '#4285F4',
                }
              ,{
                height: 2.6 / 80 * 100,
                value: '2.6',
                color: '#EA4335',
              }, {
                height: 4.5 / 80 * 100,
                value: '4.5',
                color: '#FBBC04',
              }, {
                height: 10 / 80 * 100,
                value: '10',
                color: '#34A853',
              }, {
                height: 6.8 / 80 * 100,
                value: '6.8',
                color: '#FF6D01',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#46BDC6',
              }, {
                height: 14.8 / 80 * 100,
                value: '14.8',
                color: '#7BAAF7',
              }, {
                height: 10.9 / 80 * 100,
                value: '10.9',
                color: '#F07B72',
              }, {
                height: 5.1 / 80 * 100,
                value: '5.1',
                color: '#71C287',
              }
              ]
            },{
              label: '35-44',
              bars: [
                {
                  height: 0 / 80 * 100,
                  value: '0',
                  color: '#4285F4',
                }
              ,{
                height: 1.2 / 80 * 100,
                value: '1.2',
                color: '#EA4335',
              }, {
                height: 2.4 / 80 * 100,
                value: '2.4',
                color: '#FBBC04',
              }, {
                height: 12.2 / 80 * 100,
                value: '12.2',
                color: '#34A853',
              }, {
                height: 9.8 / 80 * 100,
                value: '9.8',
                color: '#FF6D01',
              }, {
                height: 41.5 / 80 * 100,
                value: '41.5',
                color: '#46BDC6',
              }, {
                height: 15.9 / 80 * 100,
                value: '15.9',
                color: '#7BAAF7',
              }, {
                height: 9.8 / 80 * 100,
                value: '9.8',
                color: '#F07B72',
              }, {
                height: 4.9 / 80 * 100,
                value: '4.9',
                color: '#71C287',
              }
              ]
            },{
              label: '45-54',
              bars: [
                {
                  height: 0 / 80 * 100,
                  value: '0',
                  color: '#4285F4',
                }
              ,{
                height: 0 / 80 * 100,
                value: '0',
                color: '#EA4335',
              }, {
                height: 11.8 / 80 * 100,
                value: '11.8',
                color: '#FBBC04',
              }, {
                height: 11.8 / 80 * 100,
                value: '11.8',
                color: '#34A853',
              }, {
                height: 11.8 / 80 * 100,
                value: '11.8',
                color: '#FF6D01',
              }, {
                height: 29.4 / 80 * 100,
                value: '29.4',
                color: '#46BDC6',
              }, {
                height: 23.5 / 80 * 100,
                value: '23.5',
                color: '#7BAAF7',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#F07B72',
              }, {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#71C287',
              }
              ]
            },{
              label: '55-65',
              bars: [
                {
                  height: 0 / 80 * 100,
                  value: '0',
                  color: '#4285F4',
                }
              ,{
                height: 0 / 80 * 100,
                value: '0',
                color: '#EA4335',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#FBBC04',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#34A853',
              }, {
                height: 33.3 / 80 * 100,
                value: '33.3',
                color: '#FF6D01',
              }, {
                height: 33.3 / 80 * 100,
                value: '33.3',
                color: '#46BDC6',
              }, {
                height: 33.3 / 80 * 100,
                value: '33.3',
                color: '#7BAAF7',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#F07B72',
              }, {
                height: 0 / 80 * 100,
                value: '0',
                color: '#71C287',
              }
              ]
            },
          ]},
      {
        graphNumber: 17,
        graphTitle: 'Un aldığınızda kaç kilogram alıyorsunuz?',
        yticks: [20,40,60,80],
        legends: [
          {
            color: '#4285F4',
            value: '0 kilo',
          },
          {
            color: '#EA4335',
            value: '1 kilo',
          },
          {
            color: '#FBBC04',
            value: '2 kilo',
          },
          {
            color: '#34A853',
            value: '3 kilo',
          },
          {
            color: '#FF6D01',
            value: '4 kilo',
          },
          {
            color: '#46BDC6',
            value: '5 kilo',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 3.5 / 80 * 100,
                value: '3.5',
                color: '#4285F4',
              }
            ,{
              height: 10 / 80 * 100,
              value: '10',
              color: '#EA4335',
            }, {
              height: 14.9 / 80 * 100,
              value: '14.9',
              color: '#FBBC04',
            }, {
              height: 8.7 / 80 * 100,
              value: '8.7',
              color: '#34A853',
            }, {
              height: 4.8 / 80 * 100,
              value: '4.8',
              color: '#FF6D01',
            }, {
              height: 58.1 / 80 * 100,
              value: '58.1',
              color: '#46BDC6',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 3.6 / 80 * 100,
                value: '3.6',
                color: '#4285F4',
              }
            ,{
              height: 9.7 / 80 * 100,
              value: '9.7',
              color: '#EA4335',
            }, {
              height: 14.5 / 80 * 100,
              value: '14.5',
              color: '#FBBC04',
            }, {
              height: 7.3 / 80 * 100,
              value: '7.3',
              color: '#34A853',
            }, {
              height: 4.9 / 80 * 100,
              value: '4.9',
              color: '#FF6D01',
            }, {
              height: 60.1 / 80 * 100,
              value: '60.1',
              color: '#46BDC6',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 4.8 / 80 * 100,
                value: '4.8',
                color: '#4285F4',
              }
            ,{
              height: 12.5 / 80 * 100,
              value: '12.5',
              color: '#EA4335',
            }, {
              height: 17 / 80 * 100,
              value: '17',
              color: '#FBBC04',
            }, {
              height: 12.2 / 80 * 100,
              value: '12.2',
              color: '#34A853',
            }, {
              height: 3.9 / 80 * 100,
              value: '3.9',
              color: '#FF6D01',
            }, {
              height: 49.5 / 80 * 100,
              value: '49.5',
              color: '#46BDC6',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 6.1 / 80 * 100,
                value: '6.1',
                color: '#4285F4',
              }
            ,{
              height: 11 / 80 * 100,
              value: '11',
              color: '#EA4335',
            }, {
              height: 14.6 / 80 * 100,
              value: '14.6',
              color: '#FBBC04',
            }, {
              height: 7.3 / 80 * 100,
              value: '7.3',
              color: '#34A853',
            }, {
              height: 1.2 / 80 * 100,
              value: '1.2',
              color: '#FF6D01',
            }, {
              height: 59.8 / 80 * 100,
              value: '59.8',
              color: '#46BDC6',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#4285F4',
              }
            ,{
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#EA4335',
            }, {
              height: 29.4 / 80 * 100,
              value: '29.4',
              color: '#FBBC04',
            }, {
              height: 17.6 / 80 * 100,
              value: '17.6',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 41.2 / 80 * 100,
              value: '41.2',
              color: '#46BDC6',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#EA4335',
            }, {
              height: 66.7 / 80 * 100,
              value: '66.7',
              color: '#FBBC04',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },
        ]},
      {
        graphNumber: 18,
        graphTitle: 'Ne sıklıkla çamaşır suyu alıyorsunuz?',
        yticks: [20,40,60,80],
        legends: [
          {
            color: '#4285F4',
            value: '0 litre',
          },
          {
            color: '#EA4335',
            value: '1 litre',
          },
          {
            color: '#FBBC04',
            value: '2 litre',
          },
          {
            color: '#34A853',
            value: '3 litre',
          },
          {
            color: '#FF6D01',
            value: '4 litre',
          },
          {
            color: '#46BDC6',
            value: '5 litre',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 5.4 / 80 * 100,
                value: '5.4',
                color: '#4285F4',
              }
            ,{
              height: 45.4 / 80 * 100,
              value: '45.4',
              color: '#EA4335',
            }, {
              height: 28.7 / 80 * 100,
              value: '28.7',
              color: '#FBBC04',
            }, {
              height: 9.6 / 80 * 100,
              value: '9.6',
              color: '#34A853',
            }, {
              height: 5 / 80 * 100,
              value: '5',
              color: '#FF6D01',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#46BDC6',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 6.7 / 80 * 100,
                value: '6.7',
                color: '#4285F4',
              }
            ,{
              height: 45.2 / 80 * 100,
              value: '45.2',
              color: '#EA4335',
            }, {
              height: 28.5 / 80 * 100,
              value: '28.5',
              color: '#FBBC04',
            }, {
              height: 9.3 / 80 * 100,
              value: '9.3',
              color: '#34A853',
            }, {
              height: 5.2 / 80 * 100,
              value: '5.2',
              color: '#FF6D01',
            }, {
              height: 5.2 / 80 * 100,
              value: '5.2',
              color: '#46BDC6',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 2.3 / 80 * 100,
                value: '2.3',
                color: '#4285F4',
              }
            ,{
              height: 49.2 / 80 * 100,
              value: '49.2',
              color: '#EA4335',
            }, {
              height: 28 / 80 * 100,
              value: '28',
              color: '#FBBC04',
            }, {
              height: 10.3 / 80 * 100,
              value: '10.3',
              color: '#34A853',
            }, {
              height: 4.2 / 80 * 100,
              value: '4.2',
              color: '#FF6D01',
            }, {
              height: 6.1 / 80 * 100,
              value: '6.1',
              color: '#46BDC6',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 6.1 / 80 * 100,
                value: '6.1',
                color: '#4285F4',
              }
            ,{
              height: 45.1 / 80 * 100,
              value: '45.1',
              color: '#EA4335',
            }, {
              height: 20.7 / 80 * 100,
              value: '20.7',
              color: '#FBBC04',
            }, {
              height: 14.6 / 80 * 100,
              value: '14.6',
              color: '#34A853',
            }, {
              height: 6.1 / 80 * 100,
              value: '6.1',
              color: '#FF6D01',
            }, {
              height: 7.3 / 80 * 100,
              value: '7.3',
              color: '#46BDC6',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 5.9 / 80 * 100,
                value: '5.9',
                color: '#4285F4',
              }
            ,{
              height: 29.4 / 80 * 100,
              value: '5.9',
              color: '#EA4335',
            }, {
              height: 47.1 / 80 * 100,
              value: '29.4',
              color: '#FBBC04',
            }, {
              height: 11.8 / 80 * 100,
              value: '11.8',
              color: '#34A853',
            }, {
              height: 5.9 / 80 * 100,
              value: '5.9',
              color: '#FF6D01',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 0 / 80 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 33.3 / 80 * 100,
              value: '33.3',
              color: '#EA4335',
            }, {
              height: 66.7 / 80 * 100,
              value: '66.7',
              color: '#FBBC04',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 0 / 80 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },
        ]},
      {
        graphNumber: 19,
        graphTitle: 'Çamaşır suyunu aldığınızda kaç litre alıyorsunuz?',
        yticks: [10,20,30,40],
        legends: [
          {
            color: '#4285F4',
            value: '0-1 litre',
          },
          {
            color: '#EA4335',
            value: '1-2 litre',
          },
          {
            color: '#FBBC04',
            value: '2-3 litre',
          },
          {
            color: '#34A853',
            value: '3-4 litre',
          },
          {
            color: '#FF6D01',
            value: '4-5 litre',
          },
          {
            color: '#46BDC6',
            value: '5-6 litre',
          }
        ],
        barGroupNumber: 6,
        barGroups: [
          {
            label: 'Hepsi',
            bars: [
              {
                height: 7.4 / 40 * 100,
                value: '7.4',
                color: '#4285F4',
              }
            ,{
              height: 30.4 / 40 * 100,
              value: '30.4',
              color: '#EA4335',
            }, {
              height: 24.7 / 40 * 100,
              value: '24.7',
              color: '#FBBC04',
            }, {
              height: 14.3 / 40 * 100,
              value: '14.3',
              color: '#34A853',
            }, {
              height: 14.2 / 40 * 100,
              value: '14.2',
              color: '#FF6D01',
            }, {
              height: 9 / 40 * 100,
              value: '9',
              color: '#46BDC6',
            }
            ]
          },{
            label: '18-24',
            bars: [
              {
                height: 6.5 / 40 * 100,
                value: '6.5',
                color: '#4285F4',
              }
            ,{
              height: 30.2 / 40 * 100,
              value: '30.2',
              color: '#EA4335',
            }, {
              height: 25.3 / 40 * 100,
              value: '25.3',
              color: '#FBBC04',
            }, {
              height: 13.8 / 40 * 100,
              value: '13.8',
              color: '#34A853',
            }, {
              height: 15 / 40 * 100,
              value: '15',
              color: '#FF6D01',
            }, {
              height: 9.2 / 40 * 100,
              value: '9.2',
              color: '#46BDC6',
            }
            ]
          },{
            label: '25-34',
            bars: [
              {
                height: 10.3 / 40 * 100,
                value: '10.3',
                color: '#4285F4',
              }
            ,{
              height: 32.2 / 40 * 100,
              value: '32.2',
              color: '#EA4335',
            }, {
              height: 20.6 / 40 * 100,
              value: '20.6',
              color: '#FBBC04',
            }, {
              height: 17.4 / 40 * 100,
              value: '17.4',
              color: '#34A853',
            }, {
              height: 12.5 / 40 * 100,
              value: '12.5',
              color: '#FF6D01',
            }, {
              height: 7.1 / 40 * 100,
              value: '7.1',
              color: '#46BDC6',
            }
            ]
          },{
            label: '35-44',
            bars: [
              {
                height: 17.1 / 40 * 100,
                value: '17.1',
                color: '#4285F4',
              }
            ,{
              height: 28 / 40 * 100,
              value: '28',
              color: '#EA4335',
            }, {
              height: 22 / 40 * 100,
              value: '22',
              color: '#FBBC04',
            }, {
              height: 14.6 / 40 * 100,
              value: '14.6',
              color: '#34A853',
            }, {
              height: 11 / 40 * 100,
              value: '11',
              color: '#FF6D01',
            }, {
              height: 7.3 / 40 * 100,
              value: '7.3',
              color: '#46BDC6',
            }
            ]
          },{
            label: '45-54',
            bars: [
              {
                height: 0 / 40 * 100,
                value: '0',
                color: '#4285F4',
              }
            ,{
              height: 35.3 / 40 * 100,
              value: '5.9',
              color: '#EA4335',
            }, {
              height: 35.3 / 40 * 100,
              value: '29.4',
              color: '#FBBC04',
            }, {
              height: 17.6 / 40 * 100,
              value: '17.6',
              color: '#34A853',
            }, {
              height: 11.8 / 40 * 100,
              value: '11.8',
              color: '#FF6D01',
            }, {
              height: 0 / 40 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },{
            label: '55-65',
            bars: [
              {
                height: 33.3 / 40 * 100,
                value: '33.3',
                color: '#4285F4',
              }
            ,{
              height: 33.3 / 40 * 100,
              value: '33.3',
              color: '#EA4335',
            }, {
              height: 33.3 / 40 * 100,
              value: '33.3',
              color: '#FBBC04',
            }, {
              height: 0 / 40 * 100,
              value: '0',
              color: '#34A853',
            }, {
              height: 0 / 40 * 100,
              value: '0',
              color: '#FF6D01',
            }, {
              height: 0 / 40 * 100,
              value: '0',
              color: '#46BDC6',
            }
            ]
          },
        ]}
  ]
  return res.render('reports/a101', {
    page: 'reports/a101',
    title: 'A101 Report',
    meta: 'A101 Report',
    includes: {
      external: {
        css: ['page', 'general', 'confirm', 'logo', 'inputs', 'buttons', 'reports', 'fontawesome', 'createPage', "index"],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
      }
    },
    photos,
    graphs: graphs
  });
}
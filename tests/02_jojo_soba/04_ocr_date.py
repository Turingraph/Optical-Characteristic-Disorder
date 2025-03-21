###############################################################################################################

import os
import sys

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.boxes_img import boxes_img
from include.ocr_config import ocr_config

###############################################################################################################

path = "/tests/02_jojo_soba/img/"

names= [
    "eroth",
    "thinn",
    "thresh",
]

ocr_setting = ocr_config(
    lang = 'eng+tha',
    is_space=False
)

for name in names:
    img = boxes_img(
        img = (parent + path + name + ".jpg"), 
        kernel=np.ones((13, 23)))
    img.select_boxes(min_w=1000,max_h=50)
    img.row_boxes()
    ocr_setting.img_to_str(img=img.get_imgs()[1])
    ocr_setting.save_text(path = ["date",name])

###############################################################################################################
